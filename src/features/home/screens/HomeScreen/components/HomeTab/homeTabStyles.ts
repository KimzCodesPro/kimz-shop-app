import { spacing } from "@/constants";
import { HS } from "@/utils";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  SectionsContainer: {
    marginTop: spacing.space24.height,
    gap: spacing.space24.height,
  },
  product: {
    width: HS(140),
  },
});

export default styles;
