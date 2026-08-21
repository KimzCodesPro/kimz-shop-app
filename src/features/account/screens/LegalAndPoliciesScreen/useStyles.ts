import { spacing } from "@/src/constants";
import { useFontStyles, useTheme } from "@/src/hooks";
import { StyleSheet } from "react-native";

const useStyles = () => {
  const colors = useTheme();
  const fonts = useFontStyles();

  const styles = StyleSheet.create({
    h1: {
      color: colors.foreground.primary,
      ...fonts.mediumBold,
      marginBottom: spacing.space16.height,
    },
    p: {
      color: colors.foreground.secondary,
      ...fonts.smallRegular,
      marginBottom: spacing.space16.height,
    },
    lastP: {
      marginBottom: spacing.space16.height,
    },
  });

  return { styles };
};

export default useStyles;
