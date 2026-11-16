import { ProductCard } from "@/components/ui/card";
import { ScreenLayout } from "@/components/ui/layout";
import { TopBar } from "@/components/ui/navigations";
import { FlashList } from "@shopify/flash-list";
import styles from "./storeProductsScreenStyles";
import useStoreProductsScreen from "./useStoreProductsScreen";

const StoreProductsScreen = () => {
  const { t, products, openProductHandler } = useStoreProductsScreen();

  return (
    // Not scrollable: FlashList is the scroller here.
    <ScreenLayout
      renderTopBar={() => (
        <TopBar title={t("stores_storeProductsHeading")} goBack />
      )}
    >
      <FlashList
        data={products}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <ProductCard
            onPress={() => openProductHandler(index + 1)}
            productName={item.productName}
            brand={item.brand}
            price={item.price}
            discountPrice={item.salePrice}
            imgSrc={item.img}
            isFavorite={false}
            style={index % 2 === 0 ? styles.cardStart : styles.cardEnd}
          />
        )}
      />
    </ScreenLayout>
  );
};

export default StoreProductsScreen;
