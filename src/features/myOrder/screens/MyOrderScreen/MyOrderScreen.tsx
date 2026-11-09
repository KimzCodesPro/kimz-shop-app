import { EmptyState } from "@/components/ui/feedback";
import { ScreenLayout } from "@/components/ui/layout";
import { Tabs, TopBar } from "@/components/ui/navigations";
import { useTranslation } from "@/hooks";
import { OrderList } from "./components";
import {
  HAS_HISTORY_ORDERS,
  HAS_MY_ORDERS,
  HISTORY_ORDERS_LIST,
  MY_ORDERS_LIST,
} from "./data";

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
            tabContent: !HAS_MY_ORDERS ? (
              <EmptyState
                type="ordersActive"
                variant="info"
                title={t("orders_emptyActiveTitle")}
                description={t("orders_emptyActiveDesc")}
              />
            ) : (
              <OrderList orders={MY_ORDERS_LIST} />
            ),
          },
          {
            tabPrefix: "history",
            tabTitle: t("orders_tabHistory"),
            tabContent: !HAS_HISTORY_ORDERS ? (
              <EmptyState
                type="ordersHistory"
                variant="info"
                title={t("orders_emptyHistoryTitle")}
                description={t("orders_emptyHistoryDesc")}
              />
            ) : (
              <OrderList orders={HISTORY_ORDERS_LIST} />
            ),
          },
        ]}
      />
    </ScreenLayout>
  );
};

export default MyOrderScreen;
