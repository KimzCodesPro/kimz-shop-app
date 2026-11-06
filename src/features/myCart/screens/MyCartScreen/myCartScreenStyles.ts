import { spacing } from "@/constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: spacing.space4.height,
  },
  checkOutButton: {
    marginTop: spacing.space8.height,
  },
});

export default styles;
