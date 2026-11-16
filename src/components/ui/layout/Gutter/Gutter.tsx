import { StyleSheet, View } from "react-native";
import { CONTENT_PADDING_HORIZONTAL } from "../ScreenLayout/constants";
import { GutterProps } from "./types";

// Adds the same left/right padding as ScreenLayout. Use it inside a screen
// with paddingSides="none" for the parts that should still have the gutter,
// while full-width parts (e.g. an image carousel) stay edge to edge.
const Gutter = ({ children, style }: GutterProps) => {
  return <View style={[styles.gutter, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  gutter: {
    paddingHorizontal: CONTENT_PADDING_HORIZONTAL,
  },
});

export default Gutter;
