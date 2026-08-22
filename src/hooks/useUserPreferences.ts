import { persistor } from "@/store";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import translation from "@/store/translation/translation.json";
import {
  setEnableNotifications,
  setLanguage,
  setTheme,
} from "@/store/userPreferences/userPreferencesSlice";
import { Language, Theme } from "@/types";
import * as Updates from "expo-updates";
import { DevSettings, I18nManager } from "react-native";

const useUserPreferences = () => {
  const preferences = useAppSelector((state) => state.userPreferences);
  const dispatch = useAppDispatch();

  const changeLanguage = async (language: Language) => {
    dispatch(setLanguage(language));

    // Native layout mirroring is a startup-time flag, so a restart is the only
    // way to apply it. The flag is pinned on every change, even when the
    // direction looks unchanged: until forceRTL runs once the app follows the
    // device locale, so I18nManager.isRTL is not a reliable record of what the
    // app itself has applied.
    const shouldBeRTL = translation[language].dir === "rtl";

    I18nManager.allowRTL(shouldBeRTL);
    I18nManager.forceRTL(shouldBeRTL);

    // redux-persist writes asynchronously, so flush before restarting or the
    // app can come back mirrored while still holding the previous language.
    await persistor.flush();

    // Updates.reloadAsync() rejects in dev builds, and DevSettings.reload() is
    // stripped from release, so each environment gets its own restart path.
    if (__DEV__) {
      DevSettings.reload();
    } else {
      await Updates.reloadAsync();
    }
  };

  return {
    ...preferences,
    setLanguage: changeLanguage,
    setTheme: (theme: Theme) => dispatch(setTheme(theme)),
    setEnableNotifications: (enable: boolean) =>
      dispatch(setEnableNotifications(enable)),
  };
};

export default useUserPreferences;
