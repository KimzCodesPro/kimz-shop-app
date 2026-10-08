import { useTheme } from "@/hooks";
import { radius, spacing } from "@/constants";
import { scalingMethods } from "@/utils";
import { StyleSheet } from "react-native";

const { HS, VS } = scalingMethods;

const useStyles = () => {
  const colors = useTheme();

  const styles = StyleSheet.create({
    container: {
      flexDirection: "column",
      paddingVertical: spacing.space16.height,
    },
    stepContainer: {
      height: VS(65),
      flexDirection: "row",
    },
    stepIndicator: {
      marginRight: spacing.space12.width,
      alignItems: "center",
      width: VS(28),
    },
    stepIndicatorLine: {
      width: HS(2),
      height: HS(65),
    },
    stepIndicatorLinePassed: {
      backgroundColor: colors.success.base,
    },
    stepIndicatorLineDelivered: {
      backgroundColor: colors.border.default,
      height: HS(50),
    },
    stepIndicatorDot: {
      alignItems: "center",
      justifyContent: "center",
      borderRadius: radius.full,
      height: VS(22),
      width: VS(22),
    },
    stepIndicatorDotPassed: {
      backgroundColor: colors.success.base,
    },
    stepIndicatorDotCurrent: {
      height: VS(28),
      width: VS(28),
      backgroundColor: colors.primary.base,
    },
    stepIndicatorDotLast: {
      backgroundColor: colors.background.base,
      borderWidth: HS(2),
      borderColor: colors.border.default,
    },
    stepIndicatorCurrentInnerDot: {
      height: VS(12),
      width: VS(12),
      borderRadius: radius.full,
      backgroundColor: colors.foreground.contrast,
    },

    stepStageInfo: {
      gap: spacing.space4.height,
    },
    stepStageTitle: {
      flexDirection: "row",
      gap: spacing.space8.width,
    },
  });

  return { styles, colors };
};

export default useStyles;
