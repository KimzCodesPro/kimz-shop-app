import { radius, spacing } from "@/constants";
import { useTheme } from "@/hooks";
import useFontStyles from "@/hooks/useFontStyles";
import { scalingMethods } from "@/utils";
import { StyleSheet } from "react-native";
import { StatusType } from "./types";
const { VS, HS } = scalingMethods;

const useStyles = (status: StatusType = "default") => {
  const theme = useTheme();
  const fontStyles = useFontStyles();

  const borderStatusColor = {
    error: theme.danger.base,
    focused: theme.primary.base,
    default: theme.border.default,
  };

  const styles = StyleSheet.create({
    wrapper: {
      alignSelf: "stretch",
    },
    label: {
      marginBottom: VS(8),
    },
    inputWrapper: {
      height: VS(52),
      gap: VS(13),
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: HS(13),
      borderWidth: HS(1),
      borderRadius: radius.input,
      borderColor: borderStatusColor[status],
      backgroundColor: theme.background.base,
    },
    inputText: {
      alignSelf: "stretch",
      ...fontStyles.smallRegular,
      color: theme.foreground.primary,
      lineHeight: 0,
      flex: 1,
    },
    errorMessage: {
      marginTop: spacing.space8.height,
    },
  });
  return { styles, theme };
};

export default useStyles;
