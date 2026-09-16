import { useFontStyles, useTheme } from "@/hooks";
import { radius } from "@/src/constants";
import { scalingMethods } from "@/utils";
import { StyleSheet } from "react-native";

const { HS, VS } = scalingMethods;

const useStyles = () => {
  const colors = useTheme();
  const fontStyles = useFontStyles();
  const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center",
    },
    pinCodeContainer: {
      width: HS(54),
      height: VS(64),
      borderWidth: HS(1.5),
      borderColor: colors.border.default,
      borderRadius: radius.lg,
      margin: HS(5),
    },
    pinCodeText: {
      ...fontStyles.largeBold,
      color: colors.foreground.primary,
    },
    activePinCodeContainer: {
      borderColor: colors.primary.base,
      backgroundColor: colors.background.base,
    },
    placeholderText: {},
    filledPinCodeContainer: {
      backgroundColor: colors.background.base,
      borderColor: colors.border.default,
    },
    disabledPinCodeContainer: {
      backgroundColor: colors.background.base,
    },
  });
  return { styles, colors };
};

export default useStyles;
