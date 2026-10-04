import React from "react";
import { StyleProp, ViewStyle } from "react-native";

export type SectionScrollProps<T> = {
  data: T[];
  renderItem: (item: T) => React.ReactNode;
  style?: StyleProp<ViewStyle>;
};
