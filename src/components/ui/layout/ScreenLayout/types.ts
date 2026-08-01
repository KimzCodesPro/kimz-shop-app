import { VerticalScrollViewProps } from "../VerticalScrollView/types";

type ScreenLayoutBaseProps = {
  hasTopBar?: boolean;
  hasTabBar?: boolean;
  overRidebottomInset?: number; // pass 110 for sticky-CTA screens
  children: React.ReactNode;
};

type ScreenLayoutScrollProps =
  | { scrollable: true; scrollProps?: VerticalScrollViewProps }
  | { scrollable?: false; scrollProps?: never };

export type ScreenLayoutProps = ScreenLayoutBaseProps & ScreenLayoutScrollProps;
