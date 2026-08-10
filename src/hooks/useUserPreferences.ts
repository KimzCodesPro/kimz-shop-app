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
import { I18nManager } from "react-native";

const useUserPreferences = () => {
  const preferences = useAppSelector((state) => state.userPreferences);
  const dispatch = useAppDispatch();

  const changeLanguage = async (language: Language) => {
    dispatch(setLanguage(language));

    // Native layout mirroring is a startup-time flag, so a restart is the only
    // way to apply it — skip it entirely when the direction already matches.
    const shouldBeRTL = translation[language].dir === "rtl";
    if (shouldBeRTL === I18nManager.isRTL) return;

    I18nManager.allowRTL(shouldBeRTL);
    I18nManager.forceRTL(shouldBeRTL);

    // redux-persist writes asynchronously, so flush before restarting or the
    // app can come back mirrored while still holding the previous language.
    await persistor.flush();

    // Updates.reloadAsync() rejects in dev builds and Expo Go, so the restart
    // only happens in release — in dev the app has to be killed and reopened.
    if (!__DEV__) {
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
