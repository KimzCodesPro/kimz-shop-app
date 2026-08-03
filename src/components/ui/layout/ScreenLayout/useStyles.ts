import { useTheme } from "@/hooks";
import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const useStyles = (hasTopBar: boolean, hasTabBar: boolean) => {
  const colors = useTheme();
  const insets = useSafeAreaInsets();

  // A TopBar applies insets.top itself and the tab bar already consumes
  // insets.bottom, so we only add the inset nothing else is covering.
  const paddingTop = hasTopBar ? 0 : insets.top;
  const paddingBottom = hasTabBar ? 0 : insets.bottom;

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
