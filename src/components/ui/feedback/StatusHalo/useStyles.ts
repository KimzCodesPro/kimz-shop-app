import { useTheme } from "@/hooks";
import { radius } from "@/src/constants";
import { StatusVariant } from "@/src/types";
import { scalingMethods } from "@/utils";
import { StyleSheet } from "react-native";
const { HS, VS } = scalingMethods;

const useStyles = (variant: StatusVariant) => {
  const colors = useTheme();

  const colorsMaping: Record<StatusVariant, { halo: string; inner: string }> = {
    success: {
      halo: colors.success.tint,
      inner: colors.success.base,
    },
    warning: {
      halo: colors.warning.tint,
      inner: colors.warning.base,
    },
    danger: {
      halo: colors.danger.tint,
      inner: colors.danger.base,
    },
    info: {
      halo: colors.primary.tint,
      inner: colors.primary.base,
    },
    secondary: {
      halo: colors.background.surface,
      inner: colors.foreground.tertiary,
    },
  } as const;

  const styles = StyleSheet.create({
    halo: {
      width: HS(130),
      height: VS(130),
      borderRadius: radius.full,
      backgroundColor: colorsMaping[variant].halo,
      alignItems: "center",
      justifyContent: "center",
    },
    inner: {
      width: HS(90),
      height: VS(90),
      borderRadius: radius.full,
      backgroundColor: colorsMaping[variant].inner,
      alignItems: "center",
      justifyContent: "center",
    },
  });
  return { styles, colors };
};

export default useStyles;
