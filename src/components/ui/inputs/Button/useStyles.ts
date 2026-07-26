import { radius } from "@/constants";
import { useTheme } from "@/hooks";
import { scalingMethods } from "@/utils";
import { StyleSheet } from "react-native";
import { SizeType, VariantType } from "./types";
const { VS, HS } = scalingMethods;

const useStyle = (size: SizeType, variant: VariantType) => {
  const color = useTheme();
  const buttonHeight = size === "sm" ? VS(39) : VS(49);

  // One row per variant, so a new variant can't be added to some maps and
  // forgotten in others. The Record makes a missing variant a compile error.
  const variantColors: Record<
    VariantType,
    { background: string; typography: string; border: string }
  > = {
    primary: {
      background: color.primary.base,
      typography: color.foreground.contrast,
      border: color.primary.base,
    },
    chip: {
      background: color.background.base,
      typography: color.primary.base,
      border: color.primary.base,
    },
    link: {
      background: color.background.base,
      typography: color.primary.base,
      border: color.background.base,
    },
    ghost: {
      background: color.background.base,
      typography: color.foreground.primary,
      border: color.border.default,
    },
    danger: {
      background: color.background.base,
      typography: color.danger.base,
      border: color.background.base,
    },
  };

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
    },
  });

  return { styles, typographyColor: currentVariantColors.typography };
};

export default useStyle;
