import { ProductCard } from "@/components/ui/card";
import { ScreenLayout } from "@/components/ui/layout";
import { TopBar } from "@/components/ui/navigations";
import { Typography } from "@/components/ui/typography";
import { useTheme, useTranslation } from "@/hooks";
import { FlashList } from "@shopify/flash-list";
import { PRODUCTS_LIST } from "../../data";
import styles from "./hotDealsScreenStyles";

const HotDealsScreen = () => {
  const { t } = useTranslation();
  const colors = useTheme();

  const products = PRODUCTS_LIST.filter((item) => item.salePrice != null);
  const productsCount = products.length;

  return (
    // Not scrollable: FlashList is the scroller here. Nesting it in a
    // ScrollView would hand it unbounded height and kill recycling.
    <ScreenLayout
      renderTopBar={() => <TopBar title={t("home_hotDeals")} goBack />}
    >
      <FlashList
        data={products}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <Typography variant="smallRegular" color={colors.foreground.tertiary}>
            {t("home_categoryProductCount", { count: productsCount })}
          </Typography>
        }
        ListHeaderComponentStyle={styles.listHeader}
        renderItem={({ item, index }) => (
          <ProductCard
            productName={item.productName}
            brand={item.brand}
            price={item.price}
            discountPrice={item.salePrice}
            imgSrc={item.img}
            isFavorite={false}
            onToggleFavorite={() => {}}
            style={index % 2 === 0 ? styles.cardStart : styles.cardEnd}
          />
        )}
      />
    </ScreenLayout>
  );
};

export default HotDealsScreen;
