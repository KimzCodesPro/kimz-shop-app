import { radius } from "@/constants";
import { useTheme } from "@/hooks";
import useFontStyles from "@/hooks/useFontStyles";
import { scalingMethods } from "@/utils";
import { StyleSheet } from "react-native";
const { VS, HS } = scalingMethods;

const useStyles = () => {
  const theme = useTheme();
  const fontStyles = useFontStyles();

  const styles = StyleSheet.create({
    wrapper: {
      width: "100%",
    },
    inputWrapper: {
      marginTop: VS(12),
      gap: VS(13),
      flexDirection: "row",
      alignItems: "center",
      width: "100%",
      height: VS(52),
      paddingHorizontal: HS(13),
      paddingVertical: VS(13),
      borderWidth: 1,
      borderRadius: radius.input,
      borderColor: theme.border.default,
      backgroundColor: theme.background.base,
    },
    inputText: {
      ...fontStyles.smallRegular,
      color: theme.text.primary,
      lineHeight: 0,
    },
  });
  return { styles, theme };
};

export default useStyles;
