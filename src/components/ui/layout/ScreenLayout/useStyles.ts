import { useScreenInsets, useTheme } from "@/hooks";
import { StyleSheet } from "react-native";

const useStyles = (
  hasTopBar: boolean,
  hasTabBar: boolean,
  overRidebottomInset?: number,
) => {
  const colors = useTheme();
  const { paddingBottom, paddingTop } = useScreenInsets({
    hasTopBar,
    hasTabBar,
    overRidebottomInset,
  });

  const styles = StyleSheet.create({
    viewWrapper: {
      backgroundColor: colors.background.base,
      paddingTop,
      paddingBottom,
      flex: 1,
    },
    scrollViewWrapper: {
      backgroundColor: colors.background.base,
      paddingTop,
      flex: 1,
    },
    scrollViewContent: {
      paddingBottom,
      flexGrow: 1,
    },
  });

  return { colors, styles };
};

export default useStyles;
