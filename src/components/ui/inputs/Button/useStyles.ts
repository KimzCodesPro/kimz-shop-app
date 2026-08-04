import { opacity, radius } from "@/constants";
import { useTheme } from "@/hooks";
import { scalingMethods } from "@/utils";
import { StyleSheet } from "react-native";
import { SizeType, VariantType } from "./types";
const { VS, HS } = scalingMethods;

const useStyle = (size: SizeType, variant: VariantType, disabled?: boolean) => {
  const color = useTheme();
  const buttonHeight = size === "sm" ? VS(39) : VS(49);

  const variantColors = {
    primary: {
      background: color.primary.base,
      typography: color.foreground.contrast,
      border: color.primary.base,
    },
    chip: {
      background: "transparent",
      typography: color.primary.base,
      border: color.primary.base,
    },
    link: {
      background: "transparent",
      typography: color.primary.base,
      border: "transparent",
    },
    ghost: {
      background: "transparent",
      typography: color.foreground.primary,
      border: color.border.default,
    },
    danger: {
      background: "transparent",
      typography: color.danger.base,
      border: "transparent",
    },
  } as const;

  const currentVariantColors = variantColors[variant];

  const styles = StyleSheet.create({
    button: {
      flexDirection: "row",
      gap: HS(10),
      alignSelf: "stretch",
      height: buttonHeight,
      borderRadius: variant === "chip" ? radius.full : radius.sm,
      backgroundColor: currentVariantColors.background,
      alignItems: "center",
      justifyContent: "center",
      borderWidth: HS(1),
      borderColor: currentVariantColors.border,
      opacity: disabled ? opacity.disabled : opacity.full,
    },
  });

  return { styles, typographyColor: currentVariantColors.typography };
};

export default useStyle;
