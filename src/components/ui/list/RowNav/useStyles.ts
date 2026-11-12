import { radius, spacing } from "@/constants";
import { useTheme } from "@/hooks";
import { VS } from "@/utils";
import { StyleSheet } from "react-native";
import { getRowNavColor } from "./helpers";
import { RowNavVariant } from "./types";

const useStyles = (variant: RowNavVariant = "default") => {
  const colors = useTheme();

  const itemColor = getRowNavColor(colors, variant);

  const styles = StyleSheet.create({
    container: {
      alignSelf: "stretch",
      height: VS(48),
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      borderRadius: radius.sm,
      borderWidth: 1,
      borderColor: colors.border.default,
      paddingHorizontal: spacing.space16.width,
    },
    mainInfo: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: spacing.space12.width,
    },
    trailingInfo: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: spacing.space8.width,
    },
  });
  return { styles, colors, itemColor };
};

export default useStyles;
