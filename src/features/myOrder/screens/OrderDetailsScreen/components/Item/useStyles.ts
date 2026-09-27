import { radius, spacing } from "@/constants";
import { useTheme } from "@/hooks";
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
    },
    image: {
      width: HS(60),
      height: VS(60),
      borderRadius: radius.md,
    },
    info: {
      width: HS(137),
      gap: spacing.space4.height,
    },
    meta: {
      flexDirection: "row",
    },
    price: {
      marginLeft: "auto",
    },
  });

  return { styles, colors };
};

export default useStyles;
