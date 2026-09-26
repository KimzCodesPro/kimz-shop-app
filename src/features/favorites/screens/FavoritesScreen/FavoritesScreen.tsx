import { productSample } from "@/assets/images";
import { ProductCard } from "@/components/ui/card";
import { ScreenLayout } from "@/components/ui/layout";
import { TopBar } from "@/components/ui/navigations";
import { useTranslation } from "@/hooks";
import { FlashList } from "@shopify/flash-list";
import { FAVORITES_LIST } from "./data";
import styles from "./favoritesScreenStyles";

const FavoritesScreen = () => {
  const { t } = useTranslation();

  return (
    <ScreenLayout
      renderTopBar={() => (
        <TopBar title={t("common_bottomTabFavorite")} goBack />
      )}
    >
      <FlashList
        data={FAVORITES_LIST}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <ProductCard
            productName={item.productName}
            brand={item.brand}
            price={item.price}
            imgSrc={productSample}
            isFavorite
            onToggleFavorite={() => {}}
            style={index % 2 === 0 ? styles.cardStart : styles.cardEnd}
          />
        )}
      />
    </ScreenLayout>
  );
};

export default FavoritesScreen;
