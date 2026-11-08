import { StyleProp, ViewStyle } from "react-native";

export type ProductLineItem = {
  id: string;
  image: string;
  title: string;
  color: string;
  quantity: number;
  price: number;
};

export type ProductLineItemCardProps = {
  item: ProductLineItem;
  style?: StyleProp<ViewStyle>;
};
