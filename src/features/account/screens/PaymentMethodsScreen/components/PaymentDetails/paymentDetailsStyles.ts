import { spacing } from "@/constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    marginBottom: spacing.space8.height,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardMain: {
    marginBottom: spacing.space8.height,
  },
  cardInfoList: {
    gap: spacing.space8.height,
  },
  cardInfoSlot: {
    flexDirection: "row",
    gap: spacing.space8.height,
    alignItems: "center",
  },
  actions: {
    marginTop: spacing.space24.height,
  },
});

export default styles;
