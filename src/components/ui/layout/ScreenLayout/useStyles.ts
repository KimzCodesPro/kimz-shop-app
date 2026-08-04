import { spacing } from "@/constants";
import { useTheme } from "@/hooks";
import { scalingMethods } from "@/utils";
import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ScreenPaddingSides } from "./types";
const { VS } = scalingMethods;

// Space between the top bar and the content. Lives here rather than on the
// bar so every customTopBar gets it, and a screen can sit flush by omitting
// the bar. With no bar the wrapper has one child, so the gap collapses.
const TOP_BAR_GAP = VS(20);

// Breathing room under the last item. Design spec, not safe area — the tab
// bar already absorbs insets.bottom, so with a tab bar this is all we add.
const CONTENT_BOTTOM_GAP = VS(25);

// Gutter between the screen's content and the device edges.
const CONTENT_PADDING_HORIZONTAL = spacing.space24.width;

// Sits on the content only, never the wrapper — TopBar carries its own
// paddingHorizontal, so a wrapper-level gutter would double up on it.
const SIDE_PADDING = {
  both: { paddingHorizontal: CONTENT_PADDING_HORIZONTAL },
  start: { paddingStart: CONTENT_PADDING_HORIZONTAL },
  end: { paddingEnd: CONTENT_PADDING_HORIZONTAL },
  none: {},
} as const;

const useStyles = (
  hasTopBar: boolean,
  hasTabBar: boolean,
  paddingSides: ScreenPaddingSides,
) => {
  const colors = useTheme();
  const insets = useSafeAreaInsets();

  // A TopBar applies insets.top itself and the tab bar already consumes
  // insets.bottom, so we only add the inset nothing else is covering.
  const paddingTop = hasTopBar ? 0 : insets.top;
  const paddingBottom = (hasTabBar ? 0 : insets.bottom) + CONTENT_BOTTOM_GAP;
  const horizontalPadding = SIDE_PADDING[paddingSides];

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
      ...horizontalPadding,
      flexGrow: 1,
    },
    // Content area of the non-scrollable branch. flex: 1 so children still
    // fill the screen now that they sit one View deeper than the wrapper.
    container: {
      flex: 1,
      ...horizontalPadding,
    },
  });

  return { colors, styles };
};

export default useStyles;
