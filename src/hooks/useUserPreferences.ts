import { forcesRTL } from "@/constants";
import { persistor } from "@/store";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import translation from "@/store/translation/translation.json";
import {
  setEnableNotifications,
  setLanguage,
  setTheme,
} from "@/store/userPreferences/userPreferencesSlice";
import { Language, Theme } from "@/types";
import Constants, { ExecutionEnvironment } from "expo-constants";
import * as Updates from "expo-updates";
import { DevSettings, I18nManager, useColorScheme } from "react-native";

const useUserPreferences = () => {
  // Get the current system color scheme (light, dark or system).
  const systemScheme = useColorScheme();

  const preferences = useAppSelector((state) => state.userPreferences);
  const dispatch = useAppDispatch();

  const changeLanguage = async (language: Language) => {
    dispatch(setLanguage(language));

    // Native layout mirroring is a startup-time flag, so a restart is the only
    // way to apply it. The flag is pinned on every change, even when the
    // direction looks unchanged: until forceRTL runs once the app follows the
    // device locale, so I18nManager.isRTL is not a reliable record of what the
    // app itself has applied.
    // forcesRTL pins the app mirrored no matter which language is picked.
    const shouldBeRTL = forcesRTL || translation[language].dir === "rtl";

    I18nManager.allowRTL(shouldBeRTL);
    I18nManager.forceRTL(shouldBeRTL);

    // redux-persist writes asynchronously, so flush before restarting or the
    // app can come back mirrored while still holding the previous language.
    await persistor.flush();

    // Expo Go resets RTL preferences every time it reloads a project, so the
    // restart cannot apply the flag there — it would only throw the user out of
    // the screen for nothing. The language still changes; mirroring waits for a
    // dev or release build.
    //
    // executionEnvironment is a native constant: the expo-constants pod we
    // compile reports "bare" in every build of this app, so only Expo Go's own
    // binary ever reports "storeClient". Constants.expoGoConfig is NOT usable
    // here — it comes from the manifest, and the dev server stamps extra.expoGo
    // onto dev-build manifests too, which would skip the reload in dev.
    if (Constants.executionEnvironment === ExecutionEnvironment.StoreClient) {
      return;
    }

    // Updates.reloadAsync() rejects in dev builds, and DevSettings.reload() is
    // stripped from release, so each environment gets its own restart path.
    if (__DEV__) {
      DevSettings.reload();
    } else {
      await Updates.reloadAsync();
    }
  };

  // resolve theme, we can derive the current theme from the preferences
  // if it set to be system, we derive the theme from the device settings.
  const getSystemSchema = systemScheme === "dark" ? "dark" : "light";
  const colorScheme =
    preferences.theme === "system" ? getSystemSchema : preferences.theme;

  return {
    ...preferences,
    colorScheme,
    setLanguage: changeLanguage,
    setTheme: (theme: Theme) => dispatch(setTheme(theme)),
    setEnableNotifications: (enable: boolean) =>
      dispatch(setEnableNotifications(enable)),
  };
};

export default useUserPreferences;
