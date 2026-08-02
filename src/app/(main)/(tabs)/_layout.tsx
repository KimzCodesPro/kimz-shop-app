import { CustomTabButton } from "@/src/components/ui/layout";
import { useTheme } from "@/src/hooks";
import { scalingMethods } from "@/utils";
import { Tabs } from "expo-router/js-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const { HS, VS } = scalingMethods;

// Must match CustomTabButton's content box:
// paddingVertical 8 + icon 24 + gap 8 + label lineHeight 14 + paddingVertical 8
const TAB_BAR_HEIGHT = VS(62);

export default function TabLayout() {
  const colors = useTheme();
  const insets = useSafeAreaInsets();

  // insets.bottom carries the space the system needs, so the tab bar keeps a
  // full TAB_BAR_HEIGHT of content on every device:
  // no nav bar 0, Android gesture ~24, Android 3-button ~48, iOS indicator 34.
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          height: TAB_BAR_HEIGHT + insets.bottom,
          borderTopWidth: HS(2),
          borderTopColor: colors.border.default,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarButton: (props) => (
            <CustomTabButton {...props} name="home" label="Home" />
          ),
        }}
      />
      <Tabs.Screen
        name="myOrder"
        options={{
          title: "My Order",
          tabBarButton: (props) => (
            <CustomTabButton {...props} name="truck" label="My Order" />
          ),
        }}
      />
      <Tabs.Screen
        name="myCard"
        options={{
          title: "My Card",
          tabBarButton: (props) => (
            <CustomTabButton {...props} name="shopping-cart" label="My Card" />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
          tabBarButton: (props) => (
            <CustomTabButton {...props} name="user" label="Account" />
          ),
        }}
      />
    </Tabs>
  );
}
