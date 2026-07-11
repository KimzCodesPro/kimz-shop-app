import { radius, spacing } from "@/constants";
import { useTheme } from "@/hooks";
import { scalingMethods } from "@/utils";
import { StyleSheet } from "react-native";
const { VS } = scalingMethods;

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
      paddingBottom: VS(0),
    },
    bottomSheetContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: spacing.space24.width,
      paddingVertical: spacing.space24.height,
    },
    title: {
      color: colors.foreground.primary,
    },
    description: {
      marginTop: spacing.space8.height,
      color: colors.foreground.secondary,
    },
    bottomSheetContent: {
      marginTop: spacing.space16.height,
    },
  });
  return { colors, styles };
};

export default useStyles;
