import { spacing } from "@/constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  form: {
    gap: spacing.space16.height,
  },
  actions: {
    marginTop: "auto",
    paddingTop: spacing.space32.height,
    paddingBottom: spacing.space24.height,
  },
});

export default styles;
