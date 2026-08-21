import { ScrollViewProps } from "react-native";

// Vertical only by design — `horizontal` is dropped so a caller can't flip the
// axis and silently lose the vertical defaults (bottom gap, flexGrow, hidden
// vertical indicator) that every screen relies on. A horizontal strip is a
// different component, not a prop on this one.
export type VerticalScrollViewProps = Omit<ScrollViewProps, "horizontal">;
