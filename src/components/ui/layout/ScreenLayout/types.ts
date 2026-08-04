import { StyleProp, ViewStyle } from "react-native";
import { VerticalScrollViewProps } from "../VerticalScrollView/types";

type ScreenLayoutBaseProps = {
  // Rendered outside the scroll view so it stays pinned while content scrolls.
  topBar?: React.ReactNode;
  hasTabBar?: boolean;
  children: React.ReactNode;
};

// Both extras are non-scrollable only. When scrollable, VerticalScrollView's
// keyboardShouldPersistTaps="handled" already dismisses on tap, and the
// content area is styled through scrollProps.contentContainerStyle.
type ScreenLayoutScrollProps =
  | {
      scrollable: true;
      scrollProps?: VerticalScrollViewProps;
      dismissKeyboardOnTap?: never;
      contentContainerStyle?: never;
    }
  | {
      scrollable?: false;
      scrollProps?: never;
      dismissKeyboardOnTap?: boolean;
      contentContainerStyle?: StyleProp<ViewStyle>;
    };

export type ScreenLayoutProps = ScreenLayoutBaseProps & ScreenLayoutScrollProps;
