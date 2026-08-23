import { IconName } from "@/components/icons";
import { StyleProp, ViewStyle } from "react-native";

export type SizeType = "sm" | "lg";
export type VariantType =
  | "primary"
  | "primary-outline"
  | "chip"
  | "link"
  | "link-danger"
  | "ghost";

export type ButtonProps = {
  title: string;
  icon?: IconName;
  onPress: () => void;
  size?: SizeType;
  variant?: VariantType;
  disabled?: boolean;
  loading?: { indicator: boolean; text?: string };
  style?: StyleProp<ViewStyle>;
};
