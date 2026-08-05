import { radius } from "@/constants";
import { useTheme } from "@/hooks";
import { scalingMethods } from "@/utils";
import { StyleSheet } from "react-native";
import { TAB_GAP, TAB_PADDING_VERTICAL } from "./constants";
const { HS, VS } = scalingMethods;

const useStyles = (focused?: boolean) => {
  const colors = useTheme();

  // Tint for the icon and label — passed as a prop, not a style.
  const focusedColor = focused
    ? colors.primary.base
    : colors.foreground.tertiary;

  const styles = StyleSheet.create({
    // TabList only lays the triggers out in a row, so each button claims an
    // equal share of the bar itself.
    button: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    content: {
      alignItems: "center",
      justifyContent: "center",
      gap: TAB_GAP,
      borderTopWidth: HS(2),
      borderTopColor: focused ? colors.primary.base : "transparent",
      width: "80%",
      paddingVertical: TAB_PADDING_VERTICAL,
    },
    // Anchor for the badge — absolute children position against this View.
    iconWrapper: {
      alignItems: "center",
      justifyContent: "center",
    },
    badge: {
      position: "absolute",
      top: -VS(10),
      end: -HS(13),
      width: HS(21),
      height: HS(21),
      borderRadius: radius.full,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colors.danger.base,
    },
  });

  return { styles, colors, focusedColor };
};

export default useStyles;
