import { radius, spacing } from "@/constants";
import { useTheme } from "@/hooks";
import { StatusVariant } from "@/types";
import { StyleSheet } from "react-native";
import { statusBillColor } from "./constants";
import { StatusBillVariant } from "./types";

const useStyles = (
  colorSchema: Exclude<StatusVariant, "secondary">,
  variant: StatusBillVariant,
) => {
  const colors = useTheme();

  const currentStatusColors = statusBillColor(colors)[colorSchema];

  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor:
        variant === "outlined" ? "transparent" : currentStatusColors.tint,
      borderWidth: 1,
      borderColor:
        variant === "outlined"
          ? currentStatusColors.strong
          : currentStatusColors.tint,
      paddingHorizontal: spacing.space8.width,
      paddingVertical: spacing.space4.height,
      borderRadius: radius.full,
      gap: spacing.space4.width,
    },
  });

  return { colors, styles, strongColor: currentStatusColors.strong };
};

export default useStyles;
