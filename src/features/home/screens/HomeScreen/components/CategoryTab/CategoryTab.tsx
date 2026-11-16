import { Gutter } from "@/components/ui/layout";
import CategoryCard from "../CategoryCard/CategoryCard";
import styles from "./categoryTabStyles";
import { CategoryTabProps } from "./types";

const CategoryTab = ({ categories }: CategoryTabProps) => {
  return (
    <Gutter style={styles.container}>
      {categories.map(({ id, categoryName, productsCount, img }) => (
        <CategoryCard
          onPress={() => console.log(`Category ${categoryName} pressed`)}
          key={id}
          categoryName={categoryName}
          productsCount={productsCount}
          imgSrc={img}
        />
      ))}
    </Gutter>
  );
};

export default CategoryTab;
