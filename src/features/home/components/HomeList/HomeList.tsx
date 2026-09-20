import { productSample } from "@/assets/images";
import { ProductCard, PromoBannerCard } from "@/components/ui/card";
import { spacing } from "@/constants";
import { useState } from "react";
import { View } from "react-native";
import { SectionTitle } from "@/components/ui/typography";

const HomeList = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <View style={{ gap: spacing.space16.height }}>
      <PromoBannerCard
        title="Summer Sale 50% Off xxxx xxx x"
        shopLabel="Shop Now"
        imgSrc={productSample}
        onPress={() => {}}
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
