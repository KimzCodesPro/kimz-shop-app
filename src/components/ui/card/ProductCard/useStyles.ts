import { radius, spacing } from "@/constants";
import { useTheme } from "@/hooks";
import { scalingMethods } from "@/utils";
import { StyleSheet } from "react-native";
const { VS, HS } = scalingMethods;

const useStyles = () => {
  const colors = useTheme();

  const styles = StyleSheet.create({
    container: {
      gap: spacing.space8.height,
    },
    header: {
      height: VS(174),
      borderRadius: radius.lg,
      overflow: "hidden",
    },
    headerProductImage: {
      height: "100%",
      width: "100%",
    },
    headerFavoriteButton: {
      position: "absolute",
      top: spacing.space12.height,
      end: spacing.space12.width,
      backgroundColor: colors.background.base,
      height: VS(32),
      width: HS(32),
      borderRadius: radius.full,
      alignItems: "center",
      justifyContent: "center",
    },
    body: {
      alignItems: "center",
    },
  });

  return { styles, colors };
};

export default useStyles;
