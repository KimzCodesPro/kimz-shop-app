import { AppProviders } from "@/components/wrappers";
import Constants from "expo-constants";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { I18nManager } from "react-native";

// Hold the native splash until fonts are ready. Without this the splash hides
// as soon as the first frame renders and you see unstyled text.
SplashScreen.preventAutoHideAsync();

// TEMPORARY RTL TEST SWITCH — set expo.extra.forceRtl in app.json to force the
// app into RTL regardless of language. "extra" is a plain data bag that Expo
// never interprets, so it only does anything because we read it here.
// NOTE: forceRTL only takes effect after a full restart, so this runs at module
// scope rather than in an effect. It does not work in Expo Go, which wipes RTL
// prefs.
if (Constants.expoConfig?.extra?.forceRtl === true && __DEV__) {
  I18nManager.allowRTL(true);
  I18nManager.forceRTL(true);
}

export default function RootLayout() {
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

  return <AppProviders />;
}
