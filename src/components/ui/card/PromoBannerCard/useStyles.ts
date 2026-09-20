import { radius, spacing } from "@/constants";
import { useTheme } from "@/hooks";
import { scalingMethods } from "@/utils";
import { StyleSheet } from "react-native";
const { VS, HS } = scalingMethods;

const useStyles = () => {
  const colors = useTheme();

  const styles = StyleSheet.create({
    container: {
      height: VS(120),
      flexDirection: "row",
      justifyContent: "space-between",
      borderRadius: radius.lg,
      overflow: "hidden",
      backgroundColor: colors.background.surfaceRaised,
    },
    body: {
      alignSelf: "center",
      flex: 1,
      paddingHorizontal: spacing.space24.width,
    },
    img: {
      width: HS(100),
      height: "100%",
      borderRadius: radius.md,
    },
  });

  return { styles, colors };
};

export default useStyles;
