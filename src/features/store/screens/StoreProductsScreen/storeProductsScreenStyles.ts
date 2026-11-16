import { spacing } from "@/constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
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
