import { ImageProps } from "expo-image";
import { StyleProp, ViewStyle } from "react-native";

export type OrderProduct = {
  id: string;
  title: string;
  imgSrc: ImageProps["source"];
};

export type OrderCardProps = {
  orderNumber: string;
  products: readonly OrderProduct[];
  total: number;
  status: "onProgress" | "completed" | "cancelled";
  style?: StyleProp<ViewStyle>;
};
