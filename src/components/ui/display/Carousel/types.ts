import { ReactElement } from "react";
import type { StyleProp, ViewStyle } from "react-native";
import { PaginationDotType } from "./PaginationDot/types";

type CarouselBaseProps<T> = {
  data: T[];
  height: number;
  renderItem: (item: T) => ReactElement;
  paginationDotType?: PaginationDotType;
  loop?: boolean;
  style?: StyleProp<ViewStyle>;
};

type CarouselPropsAutoplay =
  | { autoplay?: false; autoplayInterval: never }
  | { autoplay?: true; autoplayInterval?: number };

export type CarouselProps<T> = CarouselBaseProps<T> & CarouselPropsAutoplay;
