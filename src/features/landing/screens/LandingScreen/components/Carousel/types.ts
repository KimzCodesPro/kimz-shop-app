import { ImageProps } from "expo-image";

export type CarouselSlide = {
  // Artwork for the slide — an asset from `@/assets/images`.
  img: ImageProps["source"];
  title: string;
  description: string;
};

export type CarouselProps = {
  data: CarouselSlide[];
};
