import { spacing } from "@/src/constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  statusBill: { alignSelf: "flex-start", marginBottom: spacing.space4.height },
  details: {
    marginTop: spacing.space8.height,
    gap: spacing.space4.height,
  },
});

export default styles;
