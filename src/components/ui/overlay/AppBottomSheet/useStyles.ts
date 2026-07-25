import { radius, spacing } from "@/constants";
import { useTheme } from "@/hooks";
import { StyleSheet } from "react-native";

const useStyles = () => {
  const colors = useTheme();
  const styles = StyleSheet.create({
    backDrop: {
      backgroundColor: colors.background.overlay,
    },
    bottomSheet: {
      backgroundColor: colors.background.base,
      borderRadius: radius["xl"],
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
