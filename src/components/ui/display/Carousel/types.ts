import { ReactElement } from "react";

type PaginationDotType = "pill" | "circle";

export type CarouselBaseProps<T> = {
  data: T[];
  height: number;
  renderItem: (item: T) => ReactElement;
  paginationDotType?: PaginationDotType;
  loop?: boolean;
};

type CarouselPropsAutoplay =
  | { autoplay?: false; autoplayInterval: never }
  | { autoplay?: true; autoplayInterval?: number };

export type CarouselProps<T> = CarouselBaseProps<T> & CarouselPropsAutoplay;

export type PaginationDotProps = {
  active: boolean;
  onPress: () => void;
  paginationDotType?: PaginationDotType;
};
