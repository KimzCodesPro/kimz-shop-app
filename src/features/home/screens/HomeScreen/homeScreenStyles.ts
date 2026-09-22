import { spacing } from "@/constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    gap: spacing.space16.height,
  },
  // The field only opens the search page, so it must never take the touch
  // itself — otherwise the inner TextInput focuses and raises the keyboard
  // instead of the wrapping Pressable firing.
  searchInput: {
    pointerEvents: "none",
  },
});

export default styles;
