import { productSample } from "@/assets/images";
import { ProductCard, PromoBannerCard } from "@/components/ui/card";
import { Carousel } from "@/components/ui/display";
import { useTranslation } from "@/hooks";
import { useRouter } from "expo-router";
import { useState } from "react";
import { View } from "react-native";
import SectionTitle from "../SectionTitle/SectionTitle";
import styles from "./homeListStyles";
import { HomeListProps } from "./types";

const HomeList = ({ slides, products }: HomeListProps) => {
  const { t } = useTranslation();
  const router = useRouter();
  const [isFavorite, setIsFavorite] = useState(false);

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

      <SectionTitle
        title={t("home_newArrivals")}
        actionText={t("home_seeAll")}
        onActionPress={() => router.push("/home/newArrival")}
      />
      <View style={styles.productsList}>
        {products.map((item, index) => (
          <ProductCard
            onPress={() => console.log(`Product ${item.productName} pressed`)}
            key={index}
            productName={item.productName}
            brand={item.brand}
            price={item.price}
            imgSrc={productSample}
            isFavorite={isFavorite}
            onToggleFavorite={() => setIsFavorite((prev) => !prev)}
            style={styles.productCard}
          />
        ))}
      </View>
    </View>
  );
};

export default HomeList;
