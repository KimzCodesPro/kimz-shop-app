/* eslint-disable @typescript-eslint/no-unused-vars */
import { useTheme } from "@/hooks";
import spacing from "@/constants/spacing";
import { scalingMethods } from "@/utils";
import { StyleSheet } from "react-native";

const { HS, VS } = scalingMethods;

const useStyles = () => {
  const colors = useTheme();

  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      gap: spacing.space12.width,
    },
    contentInfo: {
      gap: spacing.space4.height,
    },
  });

  return { styles, colors };
};

export default useStyles;
