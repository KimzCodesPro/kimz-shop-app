import { ImageProps } from "expo-image";
import { StyleProp, ViewStyle } from "react-native";

export type OrderItem = {
  id: string;
  image: ImageProps["source"];
  title: string;
  color: string;
  quantity: number;
  price: number;
};

export type ItemProps = {
  item: OrderItem;
  style?: StyleProp<ViewStyle>;
};
