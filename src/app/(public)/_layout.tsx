import { Stack } from "expo-router";

const PublicLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="createAccount" />
      <Stack.Screen name="login" />
    </Stack>
  );
};

export default PublicLayout;
