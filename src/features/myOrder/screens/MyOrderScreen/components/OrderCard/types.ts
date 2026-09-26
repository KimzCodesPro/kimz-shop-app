import { OrderStatus } from "@/src/features/myOrder/types";
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
  status: OrderStatus;
  onDetailsPress: () => void;
  onTrackingPress: () => void;
  style?: StyleProp<ViewStyle>;
};
