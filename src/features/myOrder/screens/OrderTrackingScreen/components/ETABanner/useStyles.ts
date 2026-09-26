import { useTheme } from "@/hooks";
import { radius, spacing } from "@/src/constants";
import { scalingMethods } from "@/utils";
import { StyleSheet } from "react-native";
const { HS, VS } = scalingMethods;

const useStyles = () => {
  const colors = useTheme();

  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      gap: spacing.space12.width,
      paddingVertical: spacing.space16.height,
      paddingHorizontal: spacing.space16.width,
      backgroundColor: colors.primary.tint,
      borderWidth: 1,
      borderColor: colors.primary.base,
      borderRadius: radius.lg,
    },
    iconContainer: {
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colors.background.base,
      width: HS(40),
      height: VS(40),
      borderRadius: radius.full,
    },
    info: {
      gap: spacing.space4.height,
    },
    title: {},
    eta: {},
  });

  return { styles, colors };
};

export default useStyles;
