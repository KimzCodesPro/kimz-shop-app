import { ScreenLayout } from "@/components/ui/layout";
import { Tabs, TopBar } from "@/components/ui/navigations";
import { useTranslation } from "@/hooks";
import { HistoryList, MyOrderList } from "./components";
import { HISTORY_ORDERS_LIST, MY_ORDERS_LIST } from "./data";

const MyOrderScreen = () => {
  const { t } = useTranslation();

  return (
    <ScreenLayout
      hasTabBar
      renderTopBar={() => <TopBar title={t("orders_title")} />}
    >
      <Tabs
        defaultTab="myOrder"
        items={[
          {
            tabPrefix: "myOrder",
            tabTitle: t("orders_tabActive"),
            tabContent: <MyOrderList orders={MY_ORDERS_LIST} />,
          },
          {
            tabPrefix: "history",
            tabTitle: t("orders_tabHistory"),
            tabContent: <HistoryList orders={HISTORY_ORDERS_LIST} />,
          },
        ]}
      />
    </ScreenLayout>
  );
};

export default MyOrderScreen;
