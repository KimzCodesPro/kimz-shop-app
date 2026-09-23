import { ScreenLayout } from "@/components/ui/layout";
import { TopBar } from "@/components/ui/navigations";
import { useTranslation } from "@/hooks";

const OrderDetailsScreen = () => {
  const { t } = useTranslation();
  // const { status } = useLocalSearchParams();
  return (
    <ScreenLayout
      scrollable
      renderTopBar={() => <TopBar title={t("myOrder_details")} goBack />}
    >
      {null}
    </ScreenLayout>
  );
};

export default OrderDetailsScreen;
