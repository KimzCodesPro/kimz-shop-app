import { ScrollViewProps } from "react-native";

type ScreenLayoutBaseProps = {
  hasTopBar?: boolean;
  hasTabBar?: boolean;
  children: React.ReactNode;
};

// dismissKeyboardOnTap only applies to the non-scrollable branch: when
// scrollable, AppScrollView's keyboardShouldPersistTaps="handled" already
// dismisses on tap and can't be turned off from here.
type ScreenLayoutScrollProps =
  | {
      scrollable: true;
      scrollProps?: ScrollViewProps;
      dismissKeyboardOnTap?: never;
    }
  | {
      scrollable?: false;
      scrollProps?: never;
      dismissKeyboardOnTap?: boolean;
    };

export type ScreenLayoutProps = ScreenLayoutBaseProps & ScreenLayoutScrollProps;
