import { productSample } from "@/assets/images";
import { ProductCard } from "@/components/ui/card";
import { spacing } from "@/constants";
import { useState } from "react";
import { View } from "react-native";
import PromoBannerCard from "../PromoBannerCard/PromoBannerCard";

const HomeList = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <View style={{ gap: spacing.space16.height }}>
      <PromoBannerCard
        title="Summer Sale 50% Off"
        shopLabel="Shop Now"
        imgSrc={productSample}
        onPress={() => {}}
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
