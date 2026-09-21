import { productSample } from "@/assets/images";
import { ProductCard, PromoBannerCard } from "@/components/ui/card";
import { SectionTitle } from "@/components/ui/typography";
import { useState } from "react";
import { View } from "react-native";
import styles from "./homeListStyles";

import { Carousel } from "@/components/ui/display";

import { PRODUCTS_LIST, PRODUCTS_SLIDES } from "./data";

const HomeList = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <View style={styles.container}>
      <Carousel
        data={PRODUCTS_SLIDES}
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
        title="Featured Products"
        actionText="See All"
        onActionPress={() => {}}
      />
      <View style={styles.productsList}>
        {PRODUCTS_LIST.map((item, index) => (
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
