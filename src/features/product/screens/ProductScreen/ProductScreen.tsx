import { productPlaceholder } from "@/assets/images";
import { StoreCard } from "@/components/ui/card";
import { Carousel } from "@/components/ui/display";
import { Gutter, ScreenLayout } from "@/components/ui/layout";
import { TopBar } from "@/components/ui/navigations";
import { Typography } from "@/components/ui/typography";
import { Image } from "expo-image";
import { View } from "react-native";
import { ColorSwitcher, FavoriteButton, StockBadge } from "./components";
import styles from "./productScreenStyles";
import useProductScreen from "./useProductScreen";

const ProductScreen = () => {
  const {
    t,
    backTo,
    productImages,
    store,
    colorPalette,
    selectedColor,
    colorChangeHandler,
    openCartHandler,
    colors,
  } = useProductScreen();

  return (
    <ScreenLayout
      paddingSides="none"
      hasTopBarGap={false}
      scrollable
      renderTopBar={() => (
        <Gutter>
          <TopBar
            title={t("product_title")}
            goBack
            forceBack={backTo}
            actionBtn={{
              icon: "shopping-bag",
              onPress: openCartHandler,
            }}
          />
        </Gutter>
      )}
    >
      <View style={styles.carouselContainer}>
        <Carousel
          data={productImages}
          height={340}
          paginationDotType="pill"
          indicatorContainerStyle={styles.carouselIndicator}
          renderItem={(img) => (
            <Image
              source={img}
              placeholder={productPlaceholder}
              placeholderContentFit="cover"
              contentFit="cover"
              transition={1000}
              style={styles.carouselImage}
            />
          )}
        />
        <StockBadge stockStatus="inStock" style={styles.stockBadge} />
      </View>
      <Gutter>
        <View style={styles.titleRow}>
          <Typography variant="mediumBold" color={colors.foreground.primary}>
            Box Bag Linar 1883
          </Typography>
          <FavoriteButton isFavorite={true} />
        </View>
        <ColorSwitcher
          selectedColor={selectedColor}
          colorPalette={colorPalette}
          onColorChange={colorChangeHandler}
          style={styles.colorSwitcherRow}
        />
        <StoreCard
          style={styles.storeRow}
          name={store.name}
          imgSrc={store.imgSrc}
          followerNumber={store.followerNumber}
          removeFollowing={() => {}}
        />
        <Typography
          variant="smallRegular"
          color={colors.foreground.secondary}
          style={styles.descriptionRow}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard
        </Typography>
      </Gutter>
    </ScreenLayout>
  );
};

export default ProductScreen;
