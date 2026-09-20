import { productSample } from "@/assets/images";
import { ProductCard, PromoBannerCard } from "@/components/ui/card";
import { SectionTitle } from "@/components/ui/typography";
import { useState } from "react";
import { View } from "react-native";
import styles from "./homeListStyles";

import { Carousel } from "@/components/ui/display";

const slides = [
  {
    id: 1,
    title: "Summer Sale 50% Off",
    shopName: "Shop Now",
    img: productSample,
  },
  {
    id: 2,
    title: "Winter Sale 30% Off",
    shopName: "Shop Now",
    img: productSample,
  },
  {
    id: 3,
    title: "Spring Sale 20% Off",
    shopName: "Shop Now",
    img: productSample,
  },
];

const HomeList = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <View style={styles.container}>
      <Carousel
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
        title="Featured Products"
        actionText="See All"
        onActionPress={() => {}}
      />
      <ProductCard
        productName="Marc Jacobs Mini"
        brand="Marc Jacobs"
        price={149}
        imgSrc={productSample}
        isFavorite={isFavorite}
        onToggleFavorite={() => setIsFavorite((prev) => !prev)}
      />
    </View>
  );
};

export default HomeList;
