import { StyleProp, ViewStyle } from "react-native";
import { VerticalScrollViewProps } from "../VerticalScrollView/types";

// Which sides carry the screen's horizontal padding. start/end rather than
// left/right so the padding follows the writing direction under RTL.
export type ScreenPaddingSides = "both" | "start" | "end" | "none";

type ScreenLayoutBaseProps = {
  // Rendered outside the scroll view so it stays pinned while content scrolls.
  // A function rather than an element so the layout can read its presence off
  // the prop itself — the top inset it carries changes the screen's padding.
  renderTopBar?: () => React.ReactNode;
  hasTabBar?: boolean;
  paddingSides?: ScreenPaddingSides;
  // Styles the content area children sit in — the same element in both
  // branches, which is also what blurs a focused input when tapped.
  contentContainerStyle?: StyleProp<ViewStyle>;
  children: React.ReactNode;
};

// Props for the scroll view itself (refs, scroll events, bounce…). Content
// styling goes through contentContainerStyle above, not through here.
type ScreenLayoutConditionalProps =
  | { scrollable?: false; scrollProps?: never }
  | { scrollable: true; scrollProps?: VerticalScrollViewProps };

export type ScreenLayoutProps = ScreenLayoutBaseProps &
  ScreenLayoutConditionalProps;

export type UseStylesArgs = {
  hasTopBar: boolean;
  hasTabBar: boolean;
  paddingSides: ScreenPaddingSides;
};
