import { useTheme } from "@/hooks";
import { scalingMethods } from "@/utils";
import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
const { VS } = scalingMethods;

// Space between the top bar and the content. Lives here rather than on the
// bar so every customTopBar gets it, and a screen can sit flush by omitting
// the bar. With no bar the wrapper has one child, so the gap collapses.
const TOP_BAR_GAP = VS(20);

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
      gap: TOP_BAR_GAP,
      flex: 1,
    },
    scrollViewWrapper: {
      paddingTop,
      gap: TOP_BAR_GAP,
      flex: 1,
    },
    scrollViewContent: {
      paddingBottom,
      flexGrow: 1,
    },
    // Content area of the non-scrollable branch. flex: 1 so children still
    // fill the screen now that they sit one View deeper than the wrapper.
    container: {
      flex: 1,
    },
  });

  return { colors, styles };
};

export default useStyles;
