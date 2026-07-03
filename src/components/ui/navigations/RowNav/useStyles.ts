import { radius, spacing } from "@/constants";
import { useTheme } from "@/hooks";
import { scalingMethods } from "@/utils";
import { StyleSheet } from "react-native";
const { HS, VS } = scalingMethods;

const useStyles = () => {
  const colors = useTheme();

  const styles = StyleSheet.create({
    container: {
      width: "100%",
      height: VS(48),
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: colors.background.base,
      borderWidth: HS(1),
      borderRadius: radius.input,
      borderColor: colors.border.default,
      paddingHorizontal: spacing.space16.width,
    },
    mainInfo: {
      flexDirection: "row",
      alignItems: "center",
      gap: spacing.space12.width,
    },
    trailing: {
      flexDirection: "row",
      alignItems: "center",
      gap: spacing.space12.width,
    },
  });

  return { styles, colors };
};

export default useStyles;
