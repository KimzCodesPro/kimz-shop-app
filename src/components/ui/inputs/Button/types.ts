import { IconName } from "@/components/icons";
import { StyleProp, ViewStyle } from "react-native";

export type SizeType = "sm" | "lg";
export type VariantType = "primary" | "chip" | "link" | "ghost" | "danger";

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
