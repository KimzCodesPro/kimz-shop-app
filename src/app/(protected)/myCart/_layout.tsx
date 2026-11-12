import { Stack } from "expo-router";

const MyCartLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="checkout" />
    </Stack>
  );
};

export default MyCartLayout;
