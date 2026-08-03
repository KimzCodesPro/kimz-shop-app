import { useTheme } from "@/hooks";
import { DefaultTheme, Stack, ThemeProvider } from "expo-router";

/**
 * Base navigation for the app.
 *
 * Rendered inside AppBootstrap's providers so it can read our palette and hand
 * it to React Navigation, whose own DefaultTheme would otherwise paint every
 * screen rgb(242, 242, 242).
 */
const RootLayout = () => {
  const colors = useTheme();

  const navigationTheme = {
    ...DefaultTheme,
    colors: { ...DefaultTheme.colors, background: colors.background.base },
  };

  return (
    <ThemeProvider value={navigationTheme}>
      <Stack>
        <Stack.Screen name="(main)" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
};

export default RootLayout;
