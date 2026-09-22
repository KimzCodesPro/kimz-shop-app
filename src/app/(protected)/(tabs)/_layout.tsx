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
              label={t("bottomTab_home")}
            />
          </TabTrigger>
          <TabTrigger name="myOrder" href="/myOrder" asChild>
            <CustomBottomTabButton
              icon="truck"
              label={t("bottomTab_myOrder")}
            />
          </TabTrigger>
          <TabTrigger name="myCard" href="/myCard" asChild>
            <CustomBottomTabButton
              icon="shopping-cart"
              label={t("bottomTab_myCard")}
              badge={10}
            />
          </TabTrigger>
          <TabTrigger name="account" href="/account" asChild>
            <CustomBottomTabButton
              icon="user"
              label={t("bottomTab_account")}
            />
          </TabTrigger>
        </CustomBottomTab>
      </TabList>
    </Tabs>
  );
}
