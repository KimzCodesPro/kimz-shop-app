import { ScreenLayout } from "@/components/ui/layout";
import { TopBar } from "@/components/ui/navigations";
import { useTranslation } from "@/hooks";
import {
  ItemList,
  OrderInfo,
  OrderSummary,
  Payment,
  SectionHead,
  ShippingAddress,
} from "./components";
import { ORDER, ORDER_ITEMS, ORDER_SUMMARY } from "./data";

const OrderDetailsScreen = () => {
  const { t } = useTranslation();

  return (
    <ScreenLayout
      scrollable
      renderTopBar={() => <TopBar title={t("orders_detailsTitle")} goBack />}
    >
      {/* Order Information Section */}
      <SectionHead title={t("orders_detailsOrderInfo")} isFirst />
      <OrderInfo order={ORDER} />

      {/* Order Items Section */}
      <SectionHead title={t("orders_detailsItems", { count: 3 })} />
      <ItemList items={ORDER_ITEMS} />

      {/* shipping address section */}
      <SectionHead title={t("orders_detailsShipping")} />
      <ShippingAddress
        type="home"
        userName="John Doe"
        address="Building 14, Smouha, Alexandria, EG"
        phoneNumber="0100 234 6578"
      />
      {/* payment section */}
      <SectionHead title={t("orders_detailsPayment")} />
      <Payment type="Visa" cardNumber="1234" />

      {/* Order Summary Section */}
      <SectionHead title={t("orders_detailsSummary")} />
      <OrderSummary summary={ORDER_SUMMARY} />
    </ScreenLayout>
  );
};

export default OrderDetailsScreen;
