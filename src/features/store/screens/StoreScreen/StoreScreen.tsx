import { ProductCard, PromoBannerCard, StoreCard } from "@/components/ui/card";
import { Carousel } from "@/components/ui/display";
import { ScreenLayout } from "@/components/ui/layout";
import { TopBar } from "@/components/ui/navigations";
import { FlashList } from "@shopify/flash-list";
import { View } from "react-native";
import styles from "./storeScreenStyles";
import useStoreScreen from "./useStoreScreen";

const StoreScreen = () => {
  const { t, store, slides, products, openProductHandler } = useStoreScreen();

  return (
    // Not scrollable: FlashList is the scroller here. Nesting it in a
    // ScrollView would hand it unbounded height and kill recycling.
    // The store card and carousel ride along as the list header.
    <ScreenLayout
      renderTopBar={() => <TopBar title={t("store_title")} goBack />}
    >
      <FlashList
        data={products}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View style={styles.listHeader}>
            <StoreCard
              name={store.name}
              imgSrc={store.imgSrc}
              followerNumber={store.followerNumber}
              removeFollowing={() => {}}
              // already on this store's page
              onPress={() => {}}
            />
            {/* same carousel as the home page */}
            <Carousel
              loop={true}
              autoplay={true}
              autoplayInterval={4000}
              data={slides}
              height={130}
              paginationDotType="circle"
              renderItem={(item) => (
                <PromoBannerCard
                  title={item.title}
                  shopName={item.shopName}
                  imgSrc={item.img}
                  onPress={() => {}}
                />
              )}
            />
          </View>
        }
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

export default StoreScreen;
