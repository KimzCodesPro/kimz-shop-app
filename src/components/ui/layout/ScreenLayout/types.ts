import { ScrollViewProps, StyleProp, ViewStyle } from "react-native";

// Which sides carry the screen's horizontal padding. start/end rather than
// left/right so the padding follows the writing direction under RTL.
export type ScreenPaddingSides = "both" | "start" | "end" | "none";

type ScreenLayoutBaseProps = {
  // Rendered outside the scroll view so it stays pinned while content scrolls.
  customTopBar?: React.ReactNode;
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
