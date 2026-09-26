import {
  CustomBottomTab,
  CustomBottomTabButton,
} from "@/components/ui/navigations";
import { useTranslation } from "@/hooks";
import { TabList, Tabs, TabSlot, TabTrigger } from "expo-router/ui";

export default function TabLayout() {
  const { t } = useTranslation();

  return (
    <Tabs>
      <TabSlot />
      <TabList asChild>
        <CustomBottomTab>
          <TabTrigger name="home" href="/home" asChild>
            <CustomBottomTabButton
              icon="home"
              label={t("common_bottomTabHome")}
            />
          </TabTrigger>
          <TabTrigger name="myOrder" href="/myOrder" asChild>
            <CustomBottomTabButton
              icon="truck"
              label={t("common_bottomTabMyOrder")}
            />
          </TabTrigger>
          <TabTrigger name="myCard" href="/myCard" asChild>
            <CustomBottomTabButton
              icon="shopping-cart"
              label={t("common_bottomTabMyCart")}
              badge={10}
            />
          </TabTrigger>
          <TabTrigger name="account" href="/account" asChild>
            <CustomBottomTabButton
              icon="user"
              label={t("common_bottomTabAccount")}
            />
          </TabTrigger>
        </CustomBottomTab>
      </TabList>
    </Tabs>
  );
}
