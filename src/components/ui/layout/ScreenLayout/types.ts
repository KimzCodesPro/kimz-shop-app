import { ScrollViewProps, StyleProp, ViewStyle } from "react-native";

// Which sides carry the screen's horizontal padding. start/end rather than
// left/right so the padding follows the writing direction under RTL.
export type ScreenPaddingSides = "both" | "start" | "end" | "none";

type ScreenLayoutBaseProps = {
  // Rendered outside the scroll view so it stays pinned while content scrolls.
  // A function rather than an element so the layout can read its presence off
  // the prop itself — the top inset it carries changes the screen's padding.
  renderTopBar?: () => React.ReactNode;
  // Pinned below the scroll view, so a CTA stays reachable while content
  // scrolls under it. Takes over the screen's bottom padding when present.
  renderFooter?: () => React.ReactNode;
  hasTabBar?: boolean;
  paddingSides?: ScreenPaddingSides;
  children: React.ReactNode;
};

// Both extras are non-scrollable only. When scrollable, AppScrollView's
// keyboardShouldPersistTaps="handled" already dismisses on tap, and the
// content area is styled through scrollProps.contentContainerStyle.
type ScreenLayoutConditionalProps =
  | {
      scrollable?: false;
      scrollProps?: never;
      dismissKeyboardOnTap?: boolean;
      contentContainerStyle?: StyleProp<ViewStyle>;
    }
  | {
      scrollable: true;
      scrollProps?: ScrollViewProps;
      dismissKeyboardOnTap?: never;
      contentContainerStyle?: never;
    };

export type ScreenLayoutProps = ScreenLayoutBaseProps &
  ScreenLayoutConditionalProps;

export type UseStylesArgs = {
  hasTopBar: boolean;
  hasTabBar: boolean;
  paddingSides: ScreenPaddingSides;
  hasFooter: boolean;
};
