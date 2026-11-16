import { radius, spacing } from "@/constants";
import { useTheme } from "@/hooks";
import { HS, VS } from "@/utils";
import { StyleSheet } from "react-native";
import { getStockBadgeColors } from "./helpers";
import { StockStatus } from "./types";

const useStyles = (stockStatus: StockStatus) => {
  const colors = useTheme();
  const badgeColors = getStockBadgeColors(colors, stockStatus);

  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      alignSelf: "flex-start",
      gap: spacing.space8.width,
      paddingHorizontal: spacing.space12.width,
      paddingVertical: spacing.space8.height,
      borderRadius: radius.full,
      backgroundColor: badgeColors.background,
    },
    dot: {
      width: HS(6),
      height: VS(6),
      borderRadius: radius.full,
      backgroundColor: badgeColors.dot,
    },
  });

  return { styles, badgeColors };
};

export default useStyles;
