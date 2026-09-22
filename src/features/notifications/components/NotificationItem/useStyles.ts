import { radius, spacing } from "@/src/constants";
import { useTheme } from "@/src/hooks";
import { scalingMethods } from "@/utils";
import { StyleSheet } from "react-native";
const { VS, HS } = scalingMethods;

const useStyles = () => {
  const colors = useTheme();
  const styles = StyleSheet.create({
    container: {
      paddingVertical: spacing.space16.height,
      borderBottomWidth: 1,
      borderBottomColor: colors.border.default,
      gap: spacing.space12.height,
      flexDirection: "row",
    },
    iconWrapper: {
      width: HS(48),
      height: VS(48),
      backgroundColor: colors.background.surface,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: radius.full,
    },
    content: {
      flex: 1,
      gap: spacing.space8.height,
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    description: {},
  });

  return { styles, colors };
};

export default useStyles;
