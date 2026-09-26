import { ScreenLayout } from "@/components/ui/layout";
import { TopBar } from "@/components/ui/navigations";
import { useTheme, useTranslation } from "@/hooks";
import { OrderInfo, SectionHead } from "./components";

const OrderDetailsScreen = () => {
  const colors = useTheme();
  const { t } = useTranslation();

  return (
    <ScreenLayout
      scrollable
      renderTopBar={() => <TopBar title={t("orders_detailsTitle")} goBack />}
    >
      <SectionHead title={t("orders_detailsOrderInfo")} isFirst />
      <OrderInfo />
    </ScreenLayout>
  );
};

export default OrderDetailsScreen;
