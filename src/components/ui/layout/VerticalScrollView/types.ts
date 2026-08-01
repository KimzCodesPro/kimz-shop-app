import { ScrollViewProps } from "react-native";

// This surface is vertical-only, so the horizontal knobs are not offered.
export type VerticalScrollViewProps = Omit<
  ScrollViewProps,
  "horizontal" | "showsHorizontalScrollIndicator"
>;
