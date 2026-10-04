import { ProductCard, PromoBannerCard } from "@/components/ui/card";
import { Brand, Carousel } from "@/components/ui/display";
import { useTranslation } from "@/src/hooks";
import { View } from "react-native";
import Section from "../Section/Section";
import styles from "./homeListStyles";
import { HomeListProps } from "./types";

const HomeList = ({ slides, products, brands }: HomeListProps) => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
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

      <Section
        title={t("home_popularBrands")}
        actionText={t("home_seeAll")}
        seeAllLink="/home/brands"
        data={brands}
        renderItem={(item) => (
          <Brand name={item.name} logo={item.logo} onPress={() => {}} />
        )}
      />

      <Section
        title={t("home_newArrivals")}
        actionText={t("home_seeAll")}
        seeAllLink="/home/newArrival"
        data={products}
        renderItem={(item) => (
          <ProductCard
            productName={item.productName}
            brand={item.brand}
            price={item.price}
            imgSrc={item.img}
            onPress={() => {}}
          />
        )}
      />
    </View>
  );
};

export default HomeList;
