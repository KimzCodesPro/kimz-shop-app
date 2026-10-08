import { OrderStatus } from "@/features/myOrder/types";
import { StyleProp, ViewStyle } from "react-native";

export type Order = {
  orderNumber: string;
  placedAt: string;
  status: OrderStatus;
};

export type OrderInfoProps = {
  order: Order;
  style?: StyleProp<ViewStyle>;
};
