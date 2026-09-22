import { CategoryCard } from "@/components/ui/card";
import { View } from "react-native";
import styles from "./catgoryListStyles";
import { CATEGORIES_LIST } from "./data";

const CategoryList = () => {
  return (
    <View style={styles.container}>
      {CATEGORIES_LIST.map(({ id, categoryName, productsCount, img }) => (
        <CategoryCard
          onPress={() => console.log(`Category ${categoryName} pressed`)}
          key={id}
          categoryName={categoryName}
          productsCount={productsCount}
          imgSrc={img}
        />
      ))}
    </View>
  );
};

export default CategoryList;
