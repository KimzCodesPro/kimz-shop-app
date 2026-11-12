import { ScreenLayout } from "@/components/ui/layout";
import { TopBar } from "@/components/ui/navigations";
import { useTranslation } from "@/hooks";
import { View } from "react-native";

const CheckoutScreen = () => {
  const { t } = useTranslation();

  return (
    <ScreenLayout
      scrollable
      renderTopBar={() => <TopBar title={t("checkout_title")} goBack />}
    >
      {/* checkout content goes here */}
      <View />
    </ScreenLayout>
  );
};

export default CheckoutScreen;
