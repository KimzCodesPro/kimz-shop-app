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

  // No backgroundColor here: RootLayout hands colors.background.base to
  // React Navigation's theme, which paints every screen for us.
  const styles = StyleSheet.create({
    viewWrapper: {
      paddingTop,
      paddingBottom,
      flex: 1,
    },
    scrollViewWrapper: {
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
