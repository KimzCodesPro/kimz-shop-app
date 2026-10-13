import { radius } from "@/constants";
import { useTheme } from "@/hooks";
import { StyleSheet } from "react-native";
import { DOT_DEFAULT_SIZE, DOT_SIZES } from "./constants";
import { PaginationDotType } from "./types";

const useStyles = (type: PaginationDotType) => {
  const colors = useTheme();

  const styles = StyleSheet.create({
    dot: {
      ...DOT_DEFAULT_SIZE,
      borderRadius: radius.full,
      backgroundColor: colors.border.default,
    },
    activeDot: {
      ...DOT_SIZES[type],
      backgroundColor: colors.primary.base,
    },
  });

  return { styles, colors };
};

export default useStyles;
