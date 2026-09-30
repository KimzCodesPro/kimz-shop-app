import { useTheme, useUserPreferences } from "@/hooks";
import { NavigationBar } from "expo-navigation-bar";
import { DefaultTheme, Stack, ThemeProvider } from "expo-router";
import { StatusBar } from "expo-status-bar";

const AppNavigator = () => {
  const colors = useTheme();
  const { appResolvedTheme } = useUserPreferences();
  const navigationTheme = {
    ...DefaultTheme,
    colors: { ...DefaultTheme.colors, background: colors.background.base },
  };
  const isLoggedIn = true;

  return (
    <ThemeProvider value={navigationTheme}>
      {/* Customizing system bars */}
      <StatusBar style={appResolvedTheme === "dark" ? "light" : "dark"} />
      <NavigationBar style={appResolvedTheme} />

      {/* Navigation */}
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Protected guard={isLoggedIn}>
          <Stack.Screen name="(protected)" />
        </Stack.Protected>
        <Stack.Protected guard={!isLoggedIn}>
          <Stack.Screen name="(public)" />
        </Stack.Protected>
      </Stack>
    </ThemeProvider>
  );
};

export default AppNavigator;
