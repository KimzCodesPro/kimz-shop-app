/* eslint-disable @typescript-eslint/no-unused-vars */
import { spacing } from "@/constants";
import { useTheme } from "@/hooks";
import { scalingMethods } from "@/utils";
import { StyleSheet } from "react-native";

const { HS, VS } = scalingMethods;

const useStyles = () => {
  const colors = useTheme();

  const styles = StyleSheet.create({
    info: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: spacing.space16.height,
    },
    sum: {
      borderTopWidth: 1,
      borderTopColor: colors.border.default,
      paddingTop: spacing.space16.height,
      flexDirection: "row",
      justifyContent: "space-between",
    },
  });

  return { styles, colors };
};

export default useStyles;
