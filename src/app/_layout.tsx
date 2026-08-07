import { AppBootstrap } from "@/components/wrappers";
import Constants from "expo-constants";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { I18nManager } from "react-native";

// TEMPORARY RTL TEST SWITCH — set expo.extra.forceRtl in app.json to force the
// app into RTL regardless of language. "extra" is a plain data bag that Expo
// never interprets, so it only does anything because we read it here.
// NOTE: the flag is only read at startup, so nothing changes until you fully
// kill and reopen the app. It does not work in Expo Go, which wipes RTL prefs.
const FORCE_RTL_FOR_TESTING =
  Constants.expoConfig?.extra?.forceRtl === true && __DEV__;

export default function RootLayout() {
  useEffect(() => {
    if (!FORCE_RTL_FOR_TESTING) return;

    I18nManager.allowRTL(true);
    I18nManager.forceRTL(true);
  }, []);

  const [loaded, error] = useFonts({
    "SpaceGrotesk-Light": require("@/assets/fonts/SpaceGrotesk-Light.ttf"),
    "SpaceGrotesk-Regular": require("@/assets/fonts/SpaceGrotesk-Regular.ttf"),
    "SpaceGrotesk-Bold": require("@/assets/fonts/SpaceGrotesk-Bold.ttf"),
    "Cairo-Light": require("@/assets/fonts/Cairo-Light.ttf"),
    "Cairo-Regular": require("@/assets/fonts/Cairo-Regular.ttf"),
    "Cairo-Bold": require("@/assets/fonts/Cairo-Bold.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return <AppBootstrap />;
}
