import { StyleProp, ViewStyle } from "react-native";

export type StockStatus = "inStock" | "outOfStock";

export type StockBadgeProps = {
  stockStatus: StockStatus;
  style?: StyleProp<ViewStyle>;
};
