import { View } from "react-native";
import CategoryCard from "../CategoryCard/CategoryCard";
import styles from "./catgoryListStyles";
import { CategoryListProps } from "./types";

const CategoryList = ({ categories }: CategoryListProps) => {
  return (
    <View style={styles.container}>
      {categories.map(({ id, categoryName, productsCount, img }) => (
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
