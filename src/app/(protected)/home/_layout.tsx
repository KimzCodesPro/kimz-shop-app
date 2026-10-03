import { Stack } from "expo-router";

const HomeLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="newArrival" />
      <Stack.Screen name="brands" />
    </Stack>
  );
};

export default HomeLayout;
