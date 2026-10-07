import { useTheme } from "@/hooks";
import { radius, spacing } from "@/constants";
import { scalingMethods } from "@/utils";
import { StyleSheet } from "react-native";
const { HS, VS } = scalingMethods;

const useStyles = () => {
  const colors = useTheme();

  const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.background.surface,
      borderWidth: 0,
      flexDirection: "row",
      alignItems: "center",
      gap: spacing.space12.width,
    },
    image: {
      width: HS(64),
      height: VS(64),
      borderRadius: radius.md,
    },
    info: {
      gap: spacing.space4.height,
    },
  });

  return { styles, colors };
};

export default useStyles;
