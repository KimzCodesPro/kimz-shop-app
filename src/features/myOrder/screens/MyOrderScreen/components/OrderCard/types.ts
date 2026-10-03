import { OrderStatus } from "@/src/features/myOrder/types";
import { StyleProp, ViewStyle } from "react-native";

export type OrderProduct = {
  id: string;
  title: string;
  imgSrc: string;
};

export type Order = {
  orderNumber: string;
  products: readonly OrderProduct[];
  total: number;
  status: OrderStatus;
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
