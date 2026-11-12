import { radius } from "@/constants";
import { useTheme } from "@/hooks";
import { StatusVariant } from "@/types";
import { HS } from "@/utils";
import { StyleSheet } from "react-native";
import { getIconBadgeColor } from "./helpers";

const useStyles = (variant: Exclude<StatusVariant, "secondary">) => {
  const colors = useTheme();

  const iconColor = getIconBadgeColor(colors, variant);

  const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      justifyContent: "center",
      height: HS(43),
      width: HS(43),
      borderRadius: radius.full,
      backgroundColor: colors.background.surface,
    },
  });

  return { styles, colors, iconColor };
};

export default useStyles;
