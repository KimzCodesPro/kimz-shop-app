import { radius, spacing } from "@/constants";
import { useTheme } from "@/hooks";
import { HS, VS } from "@/utils";
import { StyleSheet } from "react-native";

const useStyles = () => {
  const colors = useTheme();

  const styles = StyleSheet.create({
    container: {},
    labelRow: {
      flexDirection: "row",
      alignItems: "center",
      gap: spacing.space4.width,
      marginBottom: spacing.space8.height,
    },
    colorsRow: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: spacing.space12.width,
    },
    // outer circle: 34. Its border is the ring: transparent by default,
    // the item's own color when selected (set in ColorSwitcher)
    colorOuter: {
      width: HS(34),
      height: VS(34),
      borderRadius: radius.full,
      borderWidth: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    // inner circle: the actual color. 32 fills the space inside the border,
    // 28 when selected leaves a background.base gap between it and the ring
    colorInner: {
      width: HS(28),
      height: VS(28),
      borderRadius: radius.full,
      alignItems: "center",
      justifyContent: "center",
    },
  });

  return { styles, colors };
};

export default useStyles;
