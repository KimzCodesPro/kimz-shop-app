import { spacing } from "@/constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: spacing.space8.height,
  },
  carousel: {
    marginTop: spacing.space8.height,
  },
  linkButton: {
    height: "auto",
  },
  actions: {
    marginTop: "auto",
    gap: spacing.space16.height,
  },
});

export default styles;
