import { spacing } from "@/constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  cardStart: {
    marginBottom: spacing.space16.height,
    marginEnd: spacing.space8.width,
  },
  cardEnd: {
    marginBottom: spacing.space16.height,
    marginStart: spacing.space8.width,
  },
});

export default styles;
