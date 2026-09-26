/* eslint-disable @typescript-eslint/no-unused-vars */
import { useTheme } from "@/hooks";
import { spacing } from "@/src/constants";
import { scalingMethods } from "@/utils";
import { StyleSheet } from "react-native";

const { HS, VS } = scalingMethods;

const useStyles = () => {
  const colors = useTheme();

  const styles = StyleSheet.create({
    container: {},
    row: {
      flexDirection: "row",
      justifyContent: "space-between",
      borderBottomWidth: 1,
      borderBottomColor: colors.background.surfaceRaised,
      paddingBottom: spacing.space8.height,
      marginBottom: spacing.space8.height,
    },
    lastRow: {
      paddingBottom: 0,
      marginBottom: 0,
      borderBottomWidth: 0,
      borderBottomColor: "transparent",
    },
  });

  return { styles, colors };
};

export default useStyles;
