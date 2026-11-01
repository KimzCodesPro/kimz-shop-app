import { AppProviders } from "@/components/wrappers";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

// Hold the native splash until fonts are ready. Without this the splash hides
// as soon as the first frame renders and you see unstyled text.
SplashScreen.preventAutoHideAsync();

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
