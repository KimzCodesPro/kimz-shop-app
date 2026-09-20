import { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";

export type TabItem = {
  tabPrefix: string;
  tabTitle: string;
  tabContent: ReactNode;
};

export type TabsProps = {
  items: TabItem[];
  defaultTab: string;
  onTabChange?: (tabPrefix: string) => void;
  style?: StyleProp<ViewStyle>;
};
