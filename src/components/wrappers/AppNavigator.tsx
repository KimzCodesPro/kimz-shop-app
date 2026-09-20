import { useTheme } from "@/hooks";
import { DefaultTheme, Stack, ThemeProvider } from "expo-router";

const AppNavigator = () => {
  const colors = useTheme();

  const navigationTheme = {
    ...DefaultTheme,
    colors: { ...DefaultTheme.colors, background: colors.background.base },
  };
  const isLoggedIn = true;

  return (
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
  );
};

export default AppNavigator;
