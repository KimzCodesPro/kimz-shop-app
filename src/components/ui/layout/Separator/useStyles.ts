import { useTheme } from "@/hooks";
import { VS } from "@/utils";
import { StyleSheet } from "react-native";
import { SPACE } from "./constants";
import type { SeparatorSpace } from "./types";

const useStyles = (space: SeparatorSpace) => {
  const colors = useTheme();

  const styles = StyleSheet.create({
    separator: {
      height: VS(1),
      marginVertical: SPACE[space],
      backgroundColor: colors.border.default,
    },
  });

  return { styles, colors };
};

export default useStyles;
