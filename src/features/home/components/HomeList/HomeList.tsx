import { productSample } from "@/assets/images";
import { ProductCard } from "@/components/ui/card";
import { useState } from "react";
import { View } from "react-native";

const HomeList = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <View>
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
