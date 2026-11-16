import { spacing } from "@/constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  // store card + carousel above the products
  listHeader: {
    gap: spacing.space24.height,
    marginBottom: spacing.space16.height,
  },
  cardStart: {
    marginBottom: spacing.space16.height,
    marginEnd: spacing.space16.width,
  },
  cardEnd: {
    marginBottom: spacing.space16.height,
    marginStart: spacing.space16.width,
  },
});

export default styles;
