import { Stack } from "expo-router";

const MyOrderLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="orderDetails" />
      <Stack.Screen name="orderTracking" />
    </Stack>
  );
};

export default MyOrderLayout;
