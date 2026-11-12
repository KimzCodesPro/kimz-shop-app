import { ProductCard, PromoBannerCard } from "@/components/ui/card";
import { Brand, Carousel } from "@/components/ui/display";
import { useTranslation } from "@/hooks";
import { useRouter } from "expo-router";
import { View } from "react-native";
import Section from "../Section/Section";
import styles from "./homeTabStyles";
import { HomeTabProps } from "./types";

const HomeTab = ({ slides, products, brands }: HomeTabProps) => {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <>
      <Carousel
        style={styles.horizontalPadding}
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
            onPress={() => { }}
          />
        )}
      />
      <View style={styles.SectionsContainer}>
        {/* brand sections */}
        <Section
          itemHorizontalSpace="large"
          title={t("home_popularBrands")}
          actionText={t("home_seeAll")}
          onActionPress={() => router.push("/home/brands")}
          data={brands}
          renderItem={(item) => (
            <Brand name={item.name} logo={item.logo} onPress={() => { }} />
          )}
        />
        {/* new arrivals section */}
        <Section
          title={t("home_newArrivals")}
          actionText={t("home_seeAll")}
          onActionPress={() => router.push("/home/newArrival")}

          data={products}
          renderItem={(item) => (
            <ProductCard
              style={styles.product}
              productName={item.productName}
              brand={item.brand}
              price={item.price}
              imgSrc={item.img}
              onPress={() => { }}
            />
          )}
        />

        {/* Hot Deals sections */}
        <Section
          title={t("home_hotDeals")}
          actionText={t("home_seeAll")}
          onActionPress={() => router.push("/home/hotDeals")}
          data={products.filter((item) => item.salePrice != null)}
          renderItem={(item) => (
            <ProductCard
              style={styles.product}
              productName={item.productName}
              brand={item.brand}
              price={item.price}
              discountPrice={item.salePrice}
              imgSrc={item.img}
              onPress={() => { }}
            />
          )}
        />
      </View>
    </>
  );
};

export default HomeTab;
