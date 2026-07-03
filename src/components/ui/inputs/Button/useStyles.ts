import { radius } from "@/constants";
import { useTheme } from "@/hooks";
import { scalingMethods } from "@/utils";
import { StyleSheet } from "react-native";
import { SizeType, VariantType } from "./types";
const { VS, HS } = scalingMethods;

const useStyle = (size: SizeType, variant: VariantType) => {
  const color = useTheme();
  const buttonHeight = size === "sm" ? VS(39) : VS(49);

  const backgroundColorVariant = {
    primary: color.primary.base,
    chip: color.background.base,
    link: color.background.base,
    ghost: color.background.base,
    danger: color.background.base,
  };

  const borderColorVariant = {
    primary: color.primary.base,
    chip: color.primary.base,
    link: color.background.base,
    ghost: color.border.default,
    danger: color.background.base,
  };

  const styles = StyleSheet.create({
    button: {
      flexDirection: "row",
      gap: HS(10),
      alignSelf: "stretch",
      height: buttonHeight,
      borderRadius: variant === "chip" ? radius.full : radius.sm,
      backgroundColor: backgroundColorVariant[variant],
      alignItems: "center",
      justifyContent: "center",
      borderWidth: HS(1),
      borderColor: borderColorVariant[variant],
    },
  });

  return { styles, color };
};

export default useStyle;
