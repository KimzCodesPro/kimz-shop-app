import { spacing } from "@/constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  content: {
    gap: spacing.space16.height,
  },
  section: {
    gap: spacing.space8.height,
  },
  totalInfo: {
    gap: spacing.space8.height,
  },
  totalInfoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default styles;
