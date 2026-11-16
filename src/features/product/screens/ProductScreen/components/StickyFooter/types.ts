import { StyleProp, ViewStyle } from "react-native";

export type StickyFooterProps = {
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  unitPrice: number;
  totalPrice: number;
  onAddToCart: () => void;
  style?: StyleProp<ViewStyle>;
};
