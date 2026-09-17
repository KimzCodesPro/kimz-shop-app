import { Stack } from "expo-router";

const PublicLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="createAccount" />
      <Stack.Screen name="loginAccount" />
    </Stack>
  );
};

export default PublicLayout;
