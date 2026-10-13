export type PaginationDotType = "pill" | "circle";

export type PaginationDotProps = {
  active: boolean;
  onPress: () => void;
  paginationDotType: PaginationDotType;
};
