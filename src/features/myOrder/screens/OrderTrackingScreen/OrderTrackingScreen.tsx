import { ScreenLayout } from "@/components/ui/layout";
import { TopBar } from "@/components/ui/navigations";
import { useTranslation } from "@/src/hooks";
import { ItemCard } from "./components";

const OrderTrackingScreen = () => {
  const { t } = useTranslation();

  return (
    <ScreenLayout
      scrollable
      renderTopBar={() => <TopBar title={t("myOrder_tracking")} goBack />}
    >
      <ItemCard />
    </ScreenLayout>
  );
};

export default OrderTrackingScreen;
