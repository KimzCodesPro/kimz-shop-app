import { radius, spacing } from "@/constants";
import { useTheme } from "@/hooks";
import { scalingMethods } from "@/utils";
import { StyleSheet } from "react-native";
const { VS } = scalingMethods;
const useStyles = () => {
  const colors = useTheme();
  const styles = StyleSheet.create({
    switcherContainer: {
      alignSelf: "flex-end",
      flexDirection: "row",
      alignItems: "center",
      height: VS(32),
      width: "auto",
      gap: spacing.space4.width,
      paddingHorizontal: spacing.space12.width,
      borderWidth: 1,
      borderColor: colors.border.default,
      borderRadius: radius.full,
    },
    confirmBtn: {
      marginTop: spacing.space24.height,
    },
  });

  return { styles, colors };
};

export default useStyles;
