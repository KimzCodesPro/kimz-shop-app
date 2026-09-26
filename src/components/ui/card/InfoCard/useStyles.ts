import { spacing } from "@/constants";
import { useTheme } from "@/hooks";
import { scalingMethods } from "@/utils";
import { StyleSheet } from "react-native";
const { VS } = scalingMethods;

const useStyles = (isSelected?: boolean) => {
  const colors = useTheme();

  const styles = StyleSheet.create({
    container: {
      alignSelf: "stretch",
      alignItems: "center",
      justifyContent: "space-between",
      gap: spacing.space8.width,
      flexDirection: "row",
      minHeight: VS(96),
      borderColor: isSelected ? colors.primary.base : colors.border.default,
    },
    leading: {
      gap: spacing.space4.height,
      flex: 1,
    },
    leadingTitle: {
      color: colors.foreground.primary,
    },
    leadingDescription: {
      color: colors.foreground.tertiary,
    },
    trailing: {
      alignItems: "flex-end",
      gap: spacing.space4.height,
    },
  });

  return { styles, colors };
};

export default useStyles;
