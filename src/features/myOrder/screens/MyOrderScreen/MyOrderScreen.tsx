import { ScreenLayout } from "@/components/ui/layout";
import { Tabs, TopBar } from "@/components/ui/navigations";
import { useTranslation } from "@/hooks";
import { HistoryList, MyOrderList } from "../../components";

const MyOrderScreen = () => {
  const { t } = useTranslation();

  return (
    <ScreenLayout
      hasTabBar
      renderTopBar={() => <TopBar title={t("myOrder_title")} />}
    >
      <Tabs
        defaultTab="myOrder"
        items={[
          {
            tabPrefix: "myOrder",
            tabTitle: t("myOrder_tabMyOrder"),
            tabContent: <MyOrderList />,
          },
          {
            tabPrefix: "history",
            tabTitle: t("myOrder_tabHistory"),
            tabContent: <HistoryList />,
          },
        ]}
      />
    </ScreenLayout>
  );
};

export default MyOrderScreen;
