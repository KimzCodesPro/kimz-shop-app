
export type CarouselSlide = {
  // Artwork for the slide — an asset from `@/assets/images`.
  img: string;
  title: string;
  description: string;
};

export type CarouselItemProps = {
  item: CarouselSlide;
};
