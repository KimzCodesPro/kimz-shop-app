import {
  CustomBottomTab,
  CustomBottomTabButton,
} from "@/components/ui/navigations";
import { TabList, Tabs, TabSlot, TabTrigger } from "expo-router/ui";

export default function TabLayout() {
  return (
    <Tabs>
      <TabSlot />
      <TabList asChild>
        <CustomBottomTab>
          <TabTrigger name="index" href="/" asChild>
            <CustomBottomTabButton iconName="home" label="Home" />
          </TabTrigger>
          <TabTrigger name="myOrder" href="/myOrder" asChild>
            <CustomBottomTabButton iconName="truck" label="My Order" />
          </TabTrigger>
          <TabTrigger name="myCard" href="/myCard" asChild>
            <CustomBottomTabButton
              iconName="shopping-cart"
              label="My Card"
              badge={10}
            />
          </TabTrigger>
          <TabTrigger name="account" href="/account" asChild>
            <CustomBottomTabButton iconName="user" label="Account" />
          </TabTrigger>
        </CustomBottomTab>
      </TabList>
    </Tabs>
  );
}
