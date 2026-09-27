import { ImageProps } from "expo-image";

export type ProductSlide = {
  id: number;
  title: string;
  shopName: string;
  img: ImageProps["source"];
};

export type Product = {
  productName: string;
  brand: string;
  price: number;
};

export type HomeListProps = {
  slides: ProductSlide[];
  products: Product[];
};
