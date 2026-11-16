import { productPlaceholder } from "@/assets/images";
import { Carousel } from "@/components/ui/display";
import { Gutter, ScreenLayout } from "@/components/ui/layout";
import { TopBar } from "@/components/ui/navigations";
import { Image } from "expo-image";
import { View } from "react-native";
import styles from "./productScreenStyles";
import useProductScreen from "./useProductScreen";

const ProductScreen = () => {
  const { t, backTo, productImages, openCartHandler } = useProductScreen();

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
      <View>
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
      </View>
    </ScreenLayout>
  );
};

export default ProductScreen;
