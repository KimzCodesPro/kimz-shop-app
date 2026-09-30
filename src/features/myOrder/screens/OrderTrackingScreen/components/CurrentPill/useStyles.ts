/* eslint-disable @typescript-eslint/no-unused-vars */
import { useTheme } from "@/hooks";
import { radius, spacing } from "@/src/constants";
import { scalingMethods } from "@/utils";
import { StyleSheet } from "react-native";

const { HS, VS } = scalingMethods;

const useStyles = () => {
  const colors = useTheme();

  const styles = StyleSheet.create({
    container: {
      paddingVertical: spacing.space4.height,
      paddingHorizontal: spacing.space8.width,
      borderRadius: radius.full,
      backgroundColor: colors.primary.tint,
      width: "auto",
    },
  });

  return { styles, colors };
};

export default useStyles;
