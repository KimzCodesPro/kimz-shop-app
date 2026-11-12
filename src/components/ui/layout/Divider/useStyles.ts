import { useTheme } from "@/hooks";
import { VS } from "@/utils";
import { StyleSheet } from "react-native";
import { DIVIDER_SPACE } from "./constants";
import type { DividerSpace } from "./types";

const useStyles = (space: DividerSpace) => {
  const colors = useTheme();

  const styles = StyleSheet.create({
    divider: {
      height: VS(1),
      marginVertical: DIVIDER_SPACE[space],
      backgroundColor: colors.border.default,
    },
  });

  return { styles, colors };
};

export default useStyles;
