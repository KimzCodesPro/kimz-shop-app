import { spacing } from "@/constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: spacing.space8.height,
  },
  form: {
    gap: spacing.space16.height,
  },
  forgotPasswordButton: {
    alignSelf: "flex-end",
    height: "auto",
  },
  forgotPasswordSheetContent: {
    gap: spacing.space16.height,
  },
  actions: {
    marginTop: "auto",
    gap: spacing.space16.height,
  },
  mainActionRow: {
    flexDirection: "row",
    gap: spacing.space12.width,
  },
  mainActionSignInButton: {
    flex: 1,
  },
  secondActionRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.space8.width,
  },
  secondActionCreateAccountButton: {
    height: "auto",
  },
});

export default styles;
