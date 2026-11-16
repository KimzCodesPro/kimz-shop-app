import React from "react";
import { StyleProp, ViewStyle } from "react-native";

export type ItemHorizontalSpace = "small" | "large";
export type SectionScrollProps<T> = {
  data: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  style?: StyleProp<ViewStyle>;
  itemHorizontalSpace?: ItemHorizontalSpace;
};
