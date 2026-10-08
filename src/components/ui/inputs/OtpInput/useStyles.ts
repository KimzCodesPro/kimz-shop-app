import { useFontStyles, useTheme } from "@/hooks";
import { radius } from "@/constants";
import { scalingMethods } from "@/utils";
import { StyleSheet } from "react-native";

const { HS, VS } = scalingMethods;

const useStyles = (verifyFailed: boolean) => {
  const colors = useTheme();
  const fontStyles = useFontStyles();

  const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center",
    },
    pinCodeContainer: {
      width: HS(48),
      height: VS(56),
      borderWidth: 1,
      borderColor: verifyFailed ? colors.danger.base : colors.border.default,
      borderRadius: radius.lg,
      margin: HS(5),
    },
    pinCodeText: {
      ...fontStyles.largeBold,
      color: verifyFailed ? colors.danger.base : colors.foreground.primary,
    },
    activePinCodeContainer: {
      borderColor: verifyFailed ? colors.danger.base : colors.primary.base,
      backgroundColor: verifyFailed
        ? colors.danger.tint
        : colors.background.base,
    },
    placeholderText: {},
    filledPinCodeContainer: {
      borderColor: verifyFailed
        ? colors.danger.base
        : colors.background.surface,
      backgroundColor: verifyFailed
        ? colors.danger.tint
        : colors.background.surface,
    },
    disabledPinCodeContainer: {
      backgroundColor: colors.background.base,
    },
  });
  return { styles, colors };
};

export default useStyles;
