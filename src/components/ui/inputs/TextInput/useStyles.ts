import { radius } from "@/constants";
import { useTheme } from "@/hooks";
import useFontStyles from "@/hooks/useFontStyles";
import { scalingMethods } from "@/utils";
import { StyleSheet } from "react-native";
import { StatusType } from "./types";
const { VS, HS } = scalingMethods;

const useStyles = (status: StatusType) => {
  const theme = useTheme();
  const fontStyles = useFontStyles();

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
      borderRadius: radius.md,
      borderColor:
        status === "error"
          ? theme.danger.base
          : status === "focused"
            ? theme.primary.base
            : theme.border.default,
      backgroundColor: theme.background.base,
    },
    inputText: {
      alignSelf: "stretch",
      ...fontStyles.smallRegular,
      color: theme.text.primary,
      lineHeight: 0,
      flex: 1,
    },
    errorMessage: {
      marginTop: VS(15),
    },
  });
  return { styles, theme };
};

export default useStyles;
