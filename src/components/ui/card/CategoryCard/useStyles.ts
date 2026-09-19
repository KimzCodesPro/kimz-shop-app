import { radius, spacing } from "@/constants";
import { useTheme } from "@/hooks";
import { scalingMethods } from "@/utils";
import { StyleSheet } from "react-native";
const { VS } = scalingMethods;

const useStyles = () => {
  const colors = useTheme();

  const styles = StyleSheet.create({
    container: {
      height: VS(100),
      flex: 1,
      flexDirection: "row",
      borderRadius: radius.lg,
      overflow: "hidden",
      backgroundColor: colors.background.surfaceRaised,
    },
    body: {
      width: "50%",
      alignSelf: "center",
      gap: spacing.space4.height,
      paddingHorizontal: spacing.space24.width,
    },
    img: {
      width: "50%",
      height: "100%",
    },
  });

  return { styles, colors };
};

export default useStyles;
