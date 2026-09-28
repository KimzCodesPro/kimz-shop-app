import { radius, spacing } from "@/constants";
import { useTheme } from "@/hooks";
import { scalingMethods } from "@/utils";
import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
const { HS, VS } = scalingMethods;

const useStyles = (focused?: boolean) => {
  const colors = useTheme();
  // The headless <Tabs /> has no built-in safe area handling, so the bottom
  // inset has to be reserved by hand.
  const insets = useSafeAreaInsets();

  // Tint for the icon and label — passed as a prop, not a style.
  const focusedColor = focused
    ? colors.primary.base
    : colors.foreground.tertiary;

  const styles = StyleSheet.create({
    // Wraps the bar so the home indicator keeps its clearance. The background
    // lives here too, otherwise that strip would be see-through.
    safeArea: {
      backgroundColor: colors.background.base,
      paddingBottom: insets.bottom,
    },
    tabBar: {
      // Bar height from the design. The safe area sits below it.
      height: VS(71),
      borderTopWidth: 1,
      borderTopColor: colors.border.default,
    },
    // TabList only lays the triggers out in a row, so each button claims an
    // equal share of the bar itself.
    tabButton: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    // The visual tab — the button around it is just the touch target.
    tabItem: {
      alignItems: "center",
      justifyContent: "center",
      gap: spacing.space8.height,
      borderTopWidth: 2,
      borderTopColor: focused ? colors.primary.base : colors.background.base,
      width: "90%",
      paddingVertical: VS(12),
    },
    // Anchor for the badge — absolute children position against this View.
    iconWrapper: {
      alignItems: "center",
      justifyContent: "center",
    },
    badge: {
      position: "absolute",
      top: -VS(8),
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
