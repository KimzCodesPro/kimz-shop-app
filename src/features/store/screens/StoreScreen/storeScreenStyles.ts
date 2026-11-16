import { spacing } from "@/constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  // store card + carousel, fixed above the products
  header: {
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
