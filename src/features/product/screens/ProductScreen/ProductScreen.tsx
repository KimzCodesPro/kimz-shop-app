import { ScreenLayout } from "@/components/ui/layout";
import { TopBar } from "@/components/ui/navigations";
import { useTranslation } from "@/hooks";
import { View } from "react-native";

const ProductScreen = () => {
  const { t } = useTranslation();

  return (
    <ScreenLayout
      renderTopBar={() => <TopBar title={t("product_title")} goBack />}
    >
      <View />
    </ScreenLayout>
  );
};

export default ProductScreen;
