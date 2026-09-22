import { Stack } from "expo-router";

const ProtectedLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="account" />
      <Stack.Screen name="home" />
      <Stack.Screen name="notifications" />
      <Stack.Screen name="favorites" />
      <Stack.Screen name="search" />
    </Stack>
  );
};

export default ProtectedLayout;
