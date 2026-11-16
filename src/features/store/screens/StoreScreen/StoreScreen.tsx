import { ScreenLayout } from "@/components/ui/layout";
import { TopBar } from "@/components/ui/navigations";
import { useTranslation } from "@/hooks";
import { View } from "react-native";

const StoreScreen = () => {
  const { t } = useTranslation();

  return (
    <ScreenLayout
      renderTopBar={() => <TopBar title={t("store_title")} goBack />}
    >
      <View />
    </ScreenLayout>
  );
};

export default StoreScreen;
