import { TAB_BAR_CONTENT_HEIGHT } from "@/components/ui/layout/CustomTabBarButton/constants";
import { CustomTabBarButton } from "@/src/components/ui/layout";
import { useTheme } from "@/src/hooks";
import { scalingMethods } from "@/utils";
import { Tabs } from "expo-router/js-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const { HS } = scalingMethods;

export default function TabLayout() {
  const colors = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          height: TAB_BAR_CONTENT_HEIGHT + insets.bottom,
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
            <CustomTabBarButton {...props} iconName="home" label="Home" />
          ),
        }}
      />
      <Tabs.Screen
        name="myOrder"
        options={{
          title: "My Order",
          tabBarButton: (props) => (
            <CustomTabBarButton {...props} iconName="truck" label="My Order" />
          ),
        }}
      />
      <Tabs.Screen
        name="myCard"
        options={{
          title: "My Card",
          tabBarButton: (props) => (
            <CustomTabBarButton
              {...props}
              iconName="shopping-cart"
              label="My Card"
              badge={10}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
          tabBarButton: (props) => (
            <CustomTabBarButton {...props} iconName="user" label="Account" />
          ),
        }}
      />
    </Tabs>
  );
}
