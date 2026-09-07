import { radius, spacing } from "@/constants";
import { useTheme } from "@/hooks";
import { scalingMethods } from "@/utils";
import { StyleSheet } from "react-native";
const { VS, HS } = scalingMethods;

const useCarouselStyles = () => {
  const colors = useTheme();

  const styles = StyleSheet.create({
    carousel: {
      width: "100%",
      height: VS(540),
    },
    item: {
      alignItems: "center",
    },
    image: {
      width: HS(325),
      height: VS(394),
      marginBottom: spacing.space24.height,
      borderRadius: radius.xl,
    },
    textContainer: {
      alignItems: "center",
      width: VS(287),
      gap: spacing.space12.height,
    },
    title: {
      color: colors.foreground.primary,
      textAlign: "center",
    },
    description: {
      color: colors.foreground.tertiary,
      textAlign: "center",
    },
    paginationContainer: {
      justifyContent: "center",
    },
    dot: {
      width: spacing.space8.width,
      height: spacing.space8.height,
      backgroundColor: colors.border.default,
    },
    activeDot: {
      width: spacing.space24.width,
      height: spacing.space8.height,
      backgroundColor: colors.primary.base,
    },
  });

  return { styles, colors };
};

export default useCarouselStyles;
