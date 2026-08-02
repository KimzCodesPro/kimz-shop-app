import { BottomTabIcon } from "@/src/components/ui/layout";
import { useTheme } from "@/src/hooks";
import { Tabs } from "expo-router";

export default function TabLayout() {
  const colors = useTheme();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary.base,
        tabBarInactiveTintColor: colors.foreground.tertiary,
        tabBarShowLabel: true,
        tabBarStyle: {},
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <BottomTabIcon
              focused={focused}
              color={color}
              activeColor={colors.primary.base}
              name="home"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="myOrder"
        options={{
          title: "My Order",
          tabBarIcon: ({ color, focused }) => {
            console.log(typeof color);
            return (
              <BottomTabIcon
                focused={focused}
                color={color}
                activeColor={colors.primary.base}
                name="truck"
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="myCard"
        options={{
          title: "My Card",
          tabBarIcon: ({ color, focused }) => (
            <BottomTabIcon
              focused={focused}
              color={color}
              activeColor={colors.primary.base}
              name="shopping-cart"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
          tabBarIcon: ({ color, focused }) => (
            <BottomTabIcon
              focused={focused}
              color={color}
              activeColor={colors.primary.base}
              name="user"
            />
          ),
        }}
      />
    </Tabs>
  );
}
