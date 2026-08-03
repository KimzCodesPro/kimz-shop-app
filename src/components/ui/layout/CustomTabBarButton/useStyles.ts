import { spacing } from "@/constants";
import { useTheme } from "@/hooks";
import { scalingMethods } from "@/utils";
import { StyleSheet } from "react-native";
const { HS, VS } = scalingMethods;

const useStyles = (focused?: boolean) => {
  const colors = useTheme();

  // Tint for the icon and label — passed as a prop, not a style.
  const focusedColor = focused
    ? colors.primary.base
    : colors.foreground.tertiary;

  const styles = StyleSheet.create({
    button: {
      alignItems: "center",
    },
    content: {
      alignItems: "center",
      justifyContent: "center",
      gap: spacing.space8.height,
      borderTopWidth: HS(2),
      borderTopColor: focused ? colors.primary.base : "transparent",
      width: "100%",
      paddingVertical: VS(12),
    },
  });

  return { styles, colors, focusedColor };
};

export default useStyles;
