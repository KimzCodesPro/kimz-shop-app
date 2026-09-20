import { categorySample } from "@/assets/images";
import { CategoryCard } from "@/components/ui/card";
import { View } from "react-native";

const CategoryList = () => {
  return (
    <View>
      <CategoryCard
        categoryName="Bags"
        productsCount={26}
        imgSrc={categorySample}
      />
    </View>
  );
};

export default CategoryList;
