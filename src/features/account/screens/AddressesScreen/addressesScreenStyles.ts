import { spacing } from "@/constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  // flex: 1 so the scroll view takes the leftover height instead of growing
  // with its content — otherwise a long list pushes the button off screen.
  scrollView: {
    flex: 1,
  },
  list: {
    gap: spacing.space16.height,
  },
});

export default styles;
