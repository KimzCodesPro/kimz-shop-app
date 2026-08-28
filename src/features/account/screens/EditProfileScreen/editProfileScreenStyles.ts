import { spacing } from "@/constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  form: {
    gap: spacing.space16.height,
  },
  avatar: {
    marginBottom: spacing.space24.height,
  },
  // Main-axis auto margin: eats the leftover height of the flexGrow content
  // area, so the button lands at the bottom when the form is short and simply
  // follows it once the content grows past the viewport. alignSelf can't do
  // this — it only moves the button across the cross (horizontal) axis.
  submitButton: {
    marginTop: "auto",
  },
});

export default styles;
