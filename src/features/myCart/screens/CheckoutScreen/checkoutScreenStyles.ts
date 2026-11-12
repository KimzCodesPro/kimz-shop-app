import { spacing } from "@/constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  content: {
    gap: spacing.space16.height,
  },
  section: {
    gap: spacing.space8.height,
  },
  sheetList: {
    gap: spacing.space12.height,
    marginBottom: spacing.space16.height,
  },
});

export default styles;
