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
    },
    handleIndicatorStyle: {
      width: HS(spacing.space48.width),
      height: VS(spacing.space4.height),
      backgroundColor: colors.border.default,
    },
    handleStyle: {
      paddingTop: VS(spacing.space12.height),
      paddingBottom: VS(0),
    },
    bottomSheetContainer: {
      flex: 1,
      alignItems: "center",
      paddingHorizontal: HS(spacing.space24.width),
      paddingVertical: VS(spacing.space24.height),
    },
    title: {
      color: colors.foreground.primary,
    },
    description: {
      marginTop: VS(spacing.space8.height),
      color: colors.foreground.secondary,
    },
    bottomSheetContent: {
      marginTop: VS(spacing.space16.height),
      alignSelf: "stretch",
      flex: 1,
    },
  });
  return { colors, styles };
};

export default useStyles;
