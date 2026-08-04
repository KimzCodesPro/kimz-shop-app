import { ScrollViewProps, StyleProp, ViewStyle } from "react-native";

type ScreenLayoutBaseProps = {
  // Rendered outside the scroll view so it stays pinned while content scrolls.
  customTopBar?: React.ReactNode;
  hasTabBar?: boolean;
  children: React.ReactNode;
};

// Both extras are non-scrollable only. When scrollable, AppScrollView's
// keyboardShouldPersistTaps="handled" already dismisses on tap, and the
// content area is styled through scrollProps.contentContainerStyle.
type ScreenLayoutConditionalProps =
  | {
      scrollable: true;
      scrollProps?: ScrollViewProps;
      dismissKeyboardOnTap?: never;
      contentContainerStyle?: never;
    }
  | {
      scrollable?: false;
      scrollProps?: never;
      dismissKeyboardOnTap?: boolean;
      contentContainerStyle?: StyleProp<ViewStyle>;
    };

export type ScreenLayoutProps = ScreenLayoutBaseProps & ScreenLayoutConditionalProps;
