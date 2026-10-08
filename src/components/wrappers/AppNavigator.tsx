import { useTheme, useUserPreferences } from "@/hooks";
import { NavigationBar } from "expo-navigation-bar";
import { DefaultTheme, Stack, ThemeProvider } from "expo-router";
import { StatusBar } from "expo-status-bar";
import * as SystemUI from "expo-system-ui";
import { useEffect } from "react";

const AppNavigator = () => {
  const colors = useTheme();
  const { colorScheme } = useUserPreferences();
  const navigationTheme = {
    ...DefaultTheme,
    colors: { ...DefaultTheme.colors, background: colors.background.base },
  };
  const isLoggedIn = false;

  useEffect(() => {
    SystemUI.setBackgroundColorAsync(colors.background.base);
  }, [colors.background.base]);

  return (
    <>
      {/* Customizing system bars */}
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
      {/* Navigation */}
      <ThemeProvider value={navigationTheme}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Protected guard={isLoggedIn}>
            <Stack.Screen name="(protected)" />
          </Stack.Protected>
          <Stack.Protected guard={!isLoggedIn}>
            <Stack.Screen name="(public)" />
          </Stack.Protected>
        </Stack>
      </ThemeProvider>
      <NavigationBar style={colorScheme === "dark" ? "light" : "dark"} />
    </>
  );
};

export default AppNavigator;
