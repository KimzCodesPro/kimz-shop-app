/* eslint-disable @typescript-eslint/no-unused-vars */
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
    iconContainer: {
      width: HS(32),
      height: HS(22),
      backgroundColor: colors.primary.tint,
      borderRadius: radius.xs,
      alignItems: "center",
      justifyContent: "center",
    },
  });

  return { styles, colors };
};

export default useStyles;
