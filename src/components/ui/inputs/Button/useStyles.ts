import { opacity, radius, spacing } from "@/constants";
import { useTheme } from "@/hooks";
import { VS } from "@/utils";
import { StyleSheet } from "react-native";
import { getButtonColors } from "./helpers";
import { SizeType, VariantType } from "./types";

const useStyle = (size: SizeType, variant: VariantType, disabled?: boolean) => {
  const colors = useTheme();
  const buttonHeight = size === "sm" ? VS(39) : VS(49);

  const currentVariantColors = getButtonColors(colors, variant);

  const styles = StyleSheet.create({
    button: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "stretch",
      height: buttonHeight,
      gap: spacing.space8.width,
      borderWidth: 1,
      borderRadius: variant === "chip" ? radius.full : radius.sm,
      backgroundColor: currentVariantColors.background,

      borderColor: currentVariantColors.border,
      opacity: disabled ? opacity.disabled : opacity.full,
    },
  });

  return { styles, typographyColor: currentVariantColors.typography };
};

export default useStyle;
