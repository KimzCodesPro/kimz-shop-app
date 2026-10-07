import { spacing } from "@/constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  contentContainer: {
    paddingTop: spacing.space16.height,
  },
  linkButton: {
    height: "auto",
  },
  actions: {
    marginTop: "auto",
    gap: spacing.space24.height,
  },
});

export default styles;
