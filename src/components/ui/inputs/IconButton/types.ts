import { IconName } from "@/components/icons";
import { StyleProp, ViewStyle } from "react-native";

// Only the outlined primary treatment exists so far. Kept as a union rather
// than a boolean so further tones drop into the colour map without a rewrite.
export type IconButtonVariant = "primary";

export type IconButtonProps = {
  icon: IconName;
  onPress: () => void;
  variant?: IconButtonVariant;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
};
