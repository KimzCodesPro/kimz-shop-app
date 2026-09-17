import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SIDE_PADDING, TOP_BAR_GAP } from "./constants";
import { UseStylesArgs } from "./types";

const useStyles = ({
  hasTopBar,
  hasTabBar,
  paddingSides,
  horizontalCenterAlignment,
  verticalCenterAlignment,
}: UseStylesArgs) => {
  const insets = useSafeAreaInsets();

  // A TopBar applies insets.top itself and the tab bar already consumes
  // insets.bottom, so we only add the inset nothing else is covering.
  const paddingTop = hasTopBar ? 0 : insets.top;
  const bottomInset = hasTabBar ? 0 : insets.bottom;
  const horizontalPadding = SIDE_PADDING[paddingSides];
  const horizontalAlignment =
    horizontalCenterAlignment === true ? "center" : "stretch";
  const verticalAlignment =
    verticalCenterAlignment === true ? "center" : "flex-start";
  // No backgroundColor here: RootLayout hands colors.background.base to
  // React Navigation's theme, which paints every screen for us.
  const styles = StyleSheet.create({
    // Fixed content can't overflow, so it needs nothing to breathe against —
    // only the inset that clears the home indicator. A screen that wants room
    // under a bottom-anchored CTA asks for it on the CTA itself.
    viewWrapper: {
      ...horizontalPadding,
      paddingTop,
      paddingBottom: bottomInset,
      gap: TOP_BAR_GAP,
      flex: 1,
    },
    // Sits outside the scroll view, so it owns the hardware clearance — the
    // scroll view then stops above the home indicator instead of drawing into
    // it, and only the design gap rides along with the content.
    //dont add CONTENT_BOTTOM_GAP we already added in verticalScrollView Component
    scrollViewWrapper: {
      ...horizontalPadding,
      paddingTop,
      paddingBottom: bottomInset,
      gap: TOP_BAR_GAP,
      flex: 1,
    },
    // Content area of the non-scrollable branch. flex: 1 so children still
    // fill the screen now that they sit one View deeper than the wrapper.
    viewContent: {
      flex: 1,
      alignItems: horizontalAlignment,
      justifyContent: verticalAlignment,
    },
    // Same role inside the scroll view, but flexGrow rather than flex: the
    // dismiss target has to fill the viewport when content is short and keep
    // growing past it when content is long. flex: 1 would cap it at the
    // viewport and there would be nothing left to scroll.
    scrollContent: {
      flexGrow: 1,
      alignItems: horizontalAlignment,
      justifyContent: verticalAlignment,
    },
  });

  return { styles };
};

export default useStyles;
