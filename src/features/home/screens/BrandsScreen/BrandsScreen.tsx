import { Brand } from "@/components/ui/display";
import { ScreenLayout } from "@/components/ui/layout";
import { TopBar } from "@/components/ui/navigations";
import { useTranslation } from "@/hooks";
import { FlashList } from "@shopify/flash-list";
import { BRANDS_LIST } from "../../data";
import { View } from "react-native";
import styles from "./brandsScreenStyles";

const BrandsScreen = () => {
  const { t } = useTranslation();

  return (
    <ScreenLayout
      renderTopBar={() => <TopBar title={t("home_popularBrands")} goBack />}
    >
      <FlashList
        data={BRANDS_LIST}
        numColumns={3}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Brand name={item.name} logo={item.logo} onPress={() => {}} />
          </View>
        )}
      />
    </ScreenLayout>
  );
};

export default BrandsScreen;
