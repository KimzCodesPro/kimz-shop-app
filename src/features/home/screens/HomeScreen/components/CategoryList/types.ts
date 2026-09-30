import { ImageProps } from "expo-image";

export type Category = {
  id: number;
  categoryName: string;
  productsCount: number;
  img: ImageProps["source"];
};

export type CategoryListProps = {
  categories: Category[];
};
