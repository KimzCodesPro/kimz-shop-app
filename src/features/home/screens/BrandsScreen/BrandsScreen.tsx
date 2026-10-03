import { ScreenLayout } from "@/components/ui/layout";
import { TopBar } from "@/components/ui/navigations";
import { useTranslation } from "@/hooks";
import { FlashList } from "@shopify/flash-list";
import { BrandCard } from "../../components";
import { BRANDS_LIST } from "../../data";
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
          <BrandCard
            name={item.name}
            logo={item.logo}
            style={styles.card}
            onPress={() => {}}
          />
        )}
      />
    </ScreenLayout>
  );
};

export default BrandsScreen;
