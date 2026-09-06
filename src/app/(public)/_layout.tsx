import { Stack } from "expo-router";

// Load-bearing: (public)/index and (protected)/(tabs)/index both resolve to "/".
// The tiebreak in getStateFromPath only matches an anchor declared on THIS
// layout — the root anchor resolves to "(public)", which never equals the
// full route path "(public)/index". Drop this and "/" opens the protected tabs.

const PublicLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
    </Stack>
  );
};

export default PublicLayout;
