import { StyleProp, ViewStyle } from "react-native";

export type OrderItem = {
  id: string;
  image: string;
  title: string;
  color: string;
  quantity: number;
  price: number;
};

export type ProductRowProps = {
  item: OrderItem;
  style?: StyleProp<ViewStyle>;
};
