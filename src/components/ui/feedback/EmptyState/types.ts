import { StatusVariant } from "@/types";
import { StyleProp, ViewStyle } from "react-native";

export type EmptyStateType =
  | "cart"
  | "favorite"
  | "ordersActive"
  | "ordersHistory"
  | "notifications"
  | "storesFollow"
  | "search";

export type EmptyStateAction = {
  title: string;
  onPress: () => void;
};

type EmptyStateBaseProps = {
  title: string;
  description: string;
  variant: StatusVariant;
  action?: EmptyStateAction;
  style?: StyleProp<ViewStyle>;
};

type EmptyStateVariantProps =
  | { type: Exclude<EmptyStateType, "search">; searchQuery?: never }
  | { type: "search"; searchQuery: string };

export type EmptyStateProps = EmptyStateBaseProps & EmptyStateVariantProps;
