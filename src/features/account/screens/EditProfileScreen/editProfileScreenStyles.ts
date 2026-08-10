import { spacing } from "@/constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  // Styles the scroll view's content area — ScreenLayout drops its own
  // container when scrollable, so the form spacing rides on the content
  // container instead of an extra wrapping View.
  form: {
    gap: spacing.space16.height,
  },
});

export default styles;
