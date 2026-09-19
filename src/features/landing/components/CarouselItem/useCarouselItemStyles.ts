import { radius, spacing } from "@/constants";
import { useTheme } from "@/hooks";
import { scalingMethods } from "@/utils";
import { StyleSheet } from "react-native";
const { VS, HS } = scalingMethods;

const useCarouselItemStyles = () => {
  const colors = useTheme();

  const styles = StyleSheet.create({
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
  });

  return { styles, colors };
};

export default useCarouselItemStyles;
