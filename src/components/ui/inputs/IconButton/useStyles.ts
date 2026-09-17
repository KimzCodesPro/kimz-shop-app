import { opacity, radius } from "@/constants";
import { useTheme } from "@/hooks";
import { scalingMethods } from "@/utils";
import { StyleSheet } from "react-native";
import { IconButtonVariant } from "./types";
const { VS, HS } = scalingMethods;

const useStyle = (variant: IconButtonVariant, disabled?: boolean) => {
  const color = useTheme();

  const variantColors = {
    primary: {
      background: color.background.base,
      icon: color.primary.base,
      border: color.primary.base,
    },
  } as const;

  const currentVariantColors = variantColors[variant];

  const styles = StyleSheet.create({
    // A fixed square rather than a Button-style height: it carries no label to
    // set its width, so both axes come from the design's 56pt box.
    button: {
      width: HS(49),
      height: VS(49),
      alignItems: "center",
      justifyContent: "center",
      borderRadius: radius.sm,
      backgroundColor: currentVariantColors.background,
      borderWidth: HS(1.5),
      borderColor: currentVariantColors.border,
      opacity: disabled ? opacity.disabled : opacity.full,
    },
  });

  return { styles, iconColor: currentVariantColors.icon };
};

export default useStyle;
