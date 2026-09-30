import { StyleProp, ViewStyle } from "react-native";

export type OrderSummaryData = {
  subtotal: number;
  shipping: number;
  total: number;
};

export type OrderSummaryProps = {
  summary: OrderSummaryData;
  style?: StyleProp<ViewStyle>;
};
