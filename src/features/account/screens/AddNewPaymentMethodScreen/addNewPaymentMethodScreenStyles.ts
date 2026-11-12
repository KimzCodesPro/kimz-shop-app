import { spacing } from "@/constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  form: {
    gap: spacing.space16.height,
    // keeps a minimum gap above the button when the form fills the screen
    marginBottom: spacing.space40.height,
  },
  setDefault: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.space12.width,
    marginTop: spacing.space16.height,
  },
  submitButton: {
    marginTop: "auto",
  },
});

export default styles;
