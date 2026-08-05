import { CustomTabBar, CustomTabBarButton } from "@/components/ui/navigations";
import { TabList, Tabs, TabSlot, TabTrigger } from "expo-router/ui";

export default function TabLayout() {
  return (
    <Tabs>
      <TabSlot />
      <TabList asChild>
        <CustomTabBar>
          <TabTrigger name="index" href="/" asChild>
            <CustomTabBarButton iconName="home" label="Home" />
          </TabTrigger>
          <TabTrigger name="myOrder" href="/myOrder" asChild>
            <CustomTabBarButton iconName="truck" label="My Order" />
          </TabTrigger>
          <TabTrigger name="myCard" href="/myCard" asChild>
            <CustomTabBarButton
              iconName="shopping-cart"
              label="My Card"
              badge={10}
            />
          </TabTrigger>
          <TabTrigger name="account" href="/account" asChild>
            <CustomTabBarButton iconName="user" label="Account" />
          </TabTrigger>
        </CustomTabBar>
      </TabList>
    </Tabs>
  );
}
