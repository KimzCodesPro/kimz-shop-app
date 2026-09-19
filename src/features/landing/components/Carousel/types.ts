import { ImageProps } from "expo-image";

export type CarouselSlide = {
  // Artwork for the slide — an asset from `@/assets/images`.
  img: ImageProps["source"];
  title: string;
  description: string;
};

type PaginationDotType = "pill" | "circle";

export type CarouselProps = {
  data: CarouselSlide[];
  height: number;
  paginationDotType?: PaginationDotType;
};

export type PaginationDotProps = {
  active: boolean;
  onPress: () => void;
  paginationDotType?: PaginationDotType;
};
