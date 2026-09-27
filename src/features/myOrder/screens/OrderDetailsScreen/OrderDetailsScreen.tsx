import { ScreenLayout } from "@/components/ui/layout";
import { TopBar } from "@/components/ui/navigations";
import { useTranslation } from "@/hooks";
import { ItemList, OrderInfo, OrderSummary, SectionHead } from "./components";
import { ORDER, ORDER_ITEMS, ORDER_SUMMARY } from "./data";

const OrderDetailsScreen = () => {
  const { t } = useTranslation();

  return (
    <ScreenLayout
      scrollable
      renderTopBar={() => <TopBar title={t("orders_detailsTitle")} goBack />}
    >
      <SectionHead title={t("orders_detailsOrderInfo")} isFirst />
      <OrderInfo order={ORDER} />
      <SectionHead title={t("orders_detailsItems", { count: 3 })} />
      <ItemList items={ORDER_ITEMS} />
      <SectionHead title={t("orders_detailsSummary")} />
      <OrderSummary summary={ORDER_SUMMARY} />
    </ScreenLayout>
  );
};

export default OrderDetailsScreen;
