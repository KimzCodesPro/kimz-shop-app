import { ProductCard, PromoBannerCard } from "@/components/ui/card";
import { Brand, Carousel } from "@/components/ui/display";
import { Gutter } from "@/components/ui/layout";
import { useTranslation } from "@/hooks";
import { usePathname, useRouter } from "expo-router";
import { View } from "react-native";
import Section from "../Section/Section";
import styles from "./homeTabStyles";
import { HomeTabProps } from "./types";

const HomeTab = ({ slides, products, brands }: HomeTabProps) => {
  const { t } = useTranslation();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <>
      <Gutter>
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
      </Gutter>
      <View style={styles.SectionsContainer}>
        {/* brand sections */}
        <Section
          itemHorizontalSpace="large"
          title={t("home_popularBrands")}
          actionText={t("home_seeAll")}
          onActionPress={() => router.push("/home/brands")}
          data={brands}
          renderItem={(item) => (
            <Brand name={item.name} logo={item.logo} onPress={() => {}} />
          )}
        />
        {/* new arrivals section */}
        <Section
          title={t("home_newArrivals")}
          actionText={t("home_seeAll")}
          onActionPress={() => router.push("/home/newArrival")}

          data={products}
          renderItem={(item, index) => (
            <ProductCard
              onPress={() =>
                router.push({
                  pathname: "/product",
                  params: { itemId: index + 1, from: pathname },
                })
              }
              style={styles.product}
              productName={item.productName}
              brand={item.brand}
              price={item.price}
              imgSrc={item.img}
            />
          )}
        />

        {/* Hot Deals sections */}
        <Section
          title={t("home_hotDeals")}
          actionText={t("home_seeAll")}
          onActionPress={() => router.push("/home/hotDeals")}
          data={products.filter((item) => item.salePrice != null)}
          renderItem={(item, index) => (
            <ProductCard
              onPress={() =>
                router.push({
                  pathname: "/product",
                  params: { itemId: index + 1, from: pathname },
                })
              }
              style={styles.product}
              productName={item.productName}
              brand={item.brand}
              price={item.price}
              discountPrice={item.salePrice}
              imgSrc={item.img}
            />
          )}
        />
      </View>
    </>
  );
};

export default HomeTab;
