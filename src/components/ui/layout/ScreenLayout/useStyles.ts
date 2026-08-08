import { useTheme } from "@/hooks";
import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { CONTENT_BOTTOM_GAP, SIDE_PADDING, TOP_BAR_GAP } from "./constants";
import { UseStylesArgs } from "./types";

const useStyles = ({ hasTopBar, hasTabBar, paddingSides }: UseStylesArgs) => {
  const colors = useTheme();
  const insets = useSafeAreaInsets();

  // A TopBar applies insets.top itself and the tab bar already consumes
  // insets.bottom, so we only add the inset nothing else is covering.
  const paddingTop = hasTopBar ? 0 : insets.top;
  const bottomInset = (hasTabBar ? 0 : insets.bottom) + CONTENT_BOTTOM_GAP;
  // The gap is a design value, so it applies either way — a tab bar hides the
  // home indicator, but it still leaves the last item flush against itself.
  const horizontalPadding = SIDE_PADDING[paddingSides];

  // No backgroundColor here: RootLayout hands colors.background.base to
  // React Navigation's theme, which paints every screen for us.
  const styles = StyleSheet.create({
    // Fixed content can't overflow, so it needs no CONTENT_BOTTOM_GAP to
    // breathe against — only the inset that clears the home indicator.
    viewWrapper: {
      ...horizontalPadding,
      paddingTop,
      paddingBottom: bottomInset,
      gap: TOP_BAR_GAP,
      flex: 1,
    },
    scrollViewWrapper: {
      ...horizontalPadding,
      paddingTop,
      gap: TOP_BAR_GAP,
      flex: 1,
    },
    scrollViewContent: {
      flexGrow: 1,
      paddingBottom: bottomInset,
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
