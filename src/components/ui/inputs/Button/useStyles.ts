import { opacity, radius, spacing } from "@/constants";
import { useTheme } from "@/hooks";
import { scalingMethods } from "@/utils";
import { StyleSheet } from "react-native";
import { buttonVariantColor } from "./helper";
import { SizeType, VariantType } from "./types";
const { VS } = scalingMethods;

const useStyle = (size: SizeType, variant: VariantType, disabled?: boolean) => {
  const colors = useTheme();
  const buttonHeight = size === "sm" ? VS(39) : VS(49);

  const currentVariantColors = buttonVariantColor(colors)[variant];

  const styles = StyleSheet.create({
    button: {
      flexDirection: "row",
      gap: spacing.space8.width,
      alignSelf: "stretch",
      height: buttonHeight,
      borderRadius: variant === "chip" ? radius.full : radius.sm,
      backgroundColor: currentVariantColors.background,
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 1,
      borderColor: currentVariantColors.border,
      opacity: disabled ? opacity.disabled : opacity.full,
    },
  });

  return { styles, typographyColor: currentVariantColors.typography };
};

export default useStyle;
