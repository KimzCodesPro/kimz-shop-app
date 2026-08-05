import { customBottomTab, radius } from "@/constants";
import { useTheme } from "@/hooks";
import { scalingMethods } from "@/utils";
import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
const { HS, VS } = scalingMethods;

const useStyles = (focused?: boolean) => {
  const colors = useTheme();
  // The headless <Tabs /> has no built-in safe area handling, so the bar
  // grows by the inset and pads it out to keep the buttons above the edge.
  const insets = useSafeAreaInsets();

  // Tint for the icon and label — passed as a prop, not a style.
  const focusedColor = focused
    ? colors.primary.base
    : colors.foreground.tertiary;

  const styles = StyleSheet.create({
    tabBar: {
      height: customBottomTab.contentHeight + insets.bottom,
      paddingBottom: insets.bottom,
      borderTopWidth: HS(1),
      borderTopColor: colors.border.default,
      backgroundColor: colors.background.base,
    },
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
      gap: customBottomTab.gap,
      borderTopWidth: HS(2),
      borderTopColor: focused ? colors.primary.base : "transparent",
      width: "80%",
      paddingVertical: customBottomTab.paddingVertical,
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
