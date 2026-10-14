import { radius, spacing } from "@/constants";
import { useTheme } from "@/hooks";
import { StatusVariant } from "@/types";
import { StyleSheet } from "react-native";
import { VARIANT_TO_SCHEMA } from "./constants";
import { statusBillColor } from "./helpers";
import { StatusBillVariant } from "./types";

const useStyles = (
  StatusVariant: Exclude<StatusVariant, "secondary">,
  variant: StatusBillVariant,
) => {
  const colors = useTheme();

  const { border, background, typography } =
    statusBillColor(colors)[VARIANT_TO_SCHEMA[variant]][StatusVariant];

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
