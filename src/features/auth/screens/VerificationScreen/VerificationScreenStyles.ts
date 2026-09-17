import { spacing } from "@/src/constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  statusHalo: {
    marginTop: spacing.space16.height,
  },
  infoContainer: {
    marginVertical: spacing.space32.height,
  },
  infoContainerHeader: {
    marginBottom: spacing.space12.height,
  },
  actionRow: {
    marginTop: spacing.space48.height,
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.space4.width,
  },
  submitButton: {
    marginTop: "auto",
  },
  bottomSheetContent: {
    gap: spacing.space16.height,
  },
  changePasswordButton: {
    marginTop: spacing.space8.height,
  },
});

export default styles;
