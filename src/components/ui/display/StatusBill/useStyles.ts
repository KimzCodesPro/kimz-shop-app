import { radius, spacing } from "@/constants";
import { useTheme } from "@/hooks";
import { StatusVariant } from "@/types";
import { StyleSheet } from "react-native";

const useStyles = (colorSchema: StatusVariant) => {
  const colors = useTheme();

  const tintColorType = {
    success: colors.success.tint,
    warning: colors.warning.tint,
    info: colors.primary.tint,
    danger: colors.danger.tint,
  };

  const strongColorType = {
    success: colors.success.strong,
    warning: colors.warning.base,
    info: colors.primary.pressed,
    danger: colors.danger.strong,
  };

  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: tintColorType[colorSchema],
      paddingHorizontal: spacing.space8.width,
      paddingVertical: spacing.space4.height,
      borderRadius: radius.full,
      gap: spacing.space4.width,
    },
  });

  return { colors, styles, strongColorType, tintColorType };
};

export default useStyles;
