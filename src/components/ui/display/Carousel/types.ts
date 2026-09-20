import { ReactElement } from "react";

type PaginationDotType = "pill" | "circle";

export type CarouselProps<T> = {
  data: T[];
  height: number;
  renderItem: (item: T) => ReactElement;
  paginationDotType?: PaginationDotType;
};

export type PaginationDotProps = {
  active: boolean;
  onPress: () => void;
  paginationDotType?: PaginationDotType;
};
