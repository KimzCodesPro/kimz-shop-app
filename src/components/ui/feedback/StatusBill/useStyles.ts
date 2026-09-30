import { radius, spacing } from "@/constants";
import { useTheme } from "@/hooks";
import { StatusVariant } from "@/types";
import { StyleSheet } from "react-native";
import { statusBillColor, VARIANT_TO_SCHEMA } from "./constants";
import { StatusBillVariant } from "./types";

const useStyles = (
  colorSchema: Exclude<StatusVariant, "secondary">,
  variant: StatusBillVariant,
) => {
  const colors = useTheme();

  const { border, background, typography } =
    statusBillColor(colors)[VARIANT_TO_SCHEMA[variant]][colorSchema];

  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: background,
      borderWidth: 1,
      borderColor: border,
      paddingHorizontal: spacing.space8.width,
      paddingVertical: spacing.space4.height,
      borderRadius: radius.full,
      gap: spacing.space4.width,
    },
  });

  return { colors, styles, typographyColor: typography };
};

export default useStyles;
