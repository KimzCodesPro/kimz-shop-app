import { spacing } from "@/constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    gap: spacing.space16.height,
  },
  searchInput: {
    pointerEvents: "none",
  },
});

export default styles;
