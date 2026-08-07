import { useTheme } from "@/hooks";
import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  CONTENT_BOTTOM_GAP,
  SIDE_PADDING,
  TOP_BAR_AND_FOOTER_GAP,
} from "./constants";
import { UseStylesArgs } from "./types";

const useStyles = ({
  hasTopBar,
  hasTabBar,
  paddingSides,
  hasFooter,
}: UseStylesArgs) => {
  const colors = useTheme();
  const insets = useSafeAreaInsets();

  // A TopBar applies insets.top itself and the tab bar already consumes
  // insets.bottom, so we only add the inset nothing else is covering.
  const paddingTop = hasTopBar ? 0 : insets.top;
  const bottomInset = hasTabBar ? 0 : insets.bottom;
  const paddingBottom = bottomInset + CONTENT_BOTTOM_GAP;
  const horizontalPadding = SIDE_PADDING[paddingSides];

  // No backgroundColor here: RootLayout hands colors.background.base to
  // React Navigation's theme, which paints every screen for us.
  const styles = StyleSheet.create({
    // Fixed content can't overflow, so it needs no CONTENT_BOTTOM_GAP — only
    // the inset, and only when the footer isn't already clearing it below.
    viewWrapper: {
      ...horizontalPadding,
      paddingTop,
      paddingBottom: hasFooter ? 0 : bottomInset,
      gap: TOP_BAR_AND_FOOTER_GAP,
      flex: 1,
    },
    scrollViewWrapper: {
      ...horizontalPadding,
      paddingTop,
      gap: TOP_BAR_AND_FOOTER_GAP,
      flex: 1,
    },
    scrollViewContent: {
      flexGrow: 1,
      paddingBottom: hasFooter ? 0 : paddingBottom,
    },
    // Content area of the non-scrollable branch. flex: 1 so children still
    // fill the screen now that they sit one View deeper than the wrapper.
    container: {
      flex: 1,
    },
    // Both footers are the last thing in the flow, so each owns the bottom
    // padding of its branch — the wrappers above drop theirs to avoid doubling.
    // A fixed screen can't overflow, so its footer takes only the inset that
    // clears the home indicator; no CONTENT_BOTTOM_GAP to breathe against.
    viewFooter: {
      paddingBottom: bottomInset,
    },
    // Pinned under content that does overflow, so it keeps the design gap.
    scrollFooter: {
      paddingBottom,
    },
  });

  return { colors, styles };
};

export default useStyles;
