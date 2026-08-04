import { StyleProp, ViewStyle } from "react-native";
import { VerticalScrollViewProps } from "../VerticalScrollView/types";

type ScreenLayoutBaseProps = {
  // Rendered outside the scroll view so it stays pinned while content scrolls.
  customTopBar?: React.ReactNode;
  hasTabBar?: boolean;
  children: React.ReactNode;
};

// Both extras are non-scrollable only. When scrollable, VerticalScrollView's
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
      scrollProps?: VerticalScrollViewProps;
      dismissKeyboardOnTap?: never;
      contentContainerStyle?: never;
    };

export type ScreenLayoutProps = ScreenLayoutBaseProps &
  ScreenLayoutConditionalProps;
