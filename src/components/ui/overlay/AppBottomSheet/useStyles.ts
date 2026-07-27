import { radius, spacing } from "@/constants";
import { useTheme } from "@/hooks";
import { scalingMethods } from "@/utils";
import { StyleSheet } from "react-native";
const { HS, VS } = scalingMethods;

const useStyles = () => {
  const colors = useTheme();
  const styles = StyleSheet.create({
    backDrop: {
      backgroundColor: colors.background.overlay,
    },
    bottomSheet: {
      backgroundColor: colors.background.base,
      borderRadius: radius["xl"],
      shadowColor: colors.misc.shadow,
      shadowOffset: {
        width: 0,
        height: -VS(4),
      },
      shadowOpacity: 0.08,
      shadowRadius: HS(16),
      elevation: 8,
    },
    handleIndicatorStyle: {
      width: spacing.space48.width,
      height: spacing.space4.height,
      backgroundColor: colors.border.default,
    },
    handleStyle: {
      paddingTop: spacing.space12.height,
      paddingBottom: 0,
    },
    container: {
      flex: 1,
      alignItems: "center",
      paddingHorizontal: spacing.space24.width,
      paddingVertical: spacing.space24.height,
    },
    content: {
      alignSelf: "stretch",
      flex: 1,
      marginTop: spacing.space16.height,
    },
    title: {
      color: colors.foreground.primary,
    },
    description: {
      marginTop: spacing.space8.height,
      color: colors.foreground.secondary,
    },
  });
  return { colors, styles };
};

export default useStyles;
