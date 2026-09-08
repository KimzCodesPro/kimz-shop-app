import { spacing } from "@/constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: spacing.space24.height,
  },
  form: {
    gap: spacing.space16.height,
  },
  forgotPasswordButton: {
    alignSelf: "flex-end",
    height: "auto",
    marginTop: -spacing.space8.height,
  },
  actions: {
    marginTop: "auto",
    gap: spacing.space24.height,
  },
  signInRow: {
    flexDirection: "row",
    gap: spacing.space12.width,
  },
  signInButton: {
    flex: 1,
  },
  createAccountRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.space8.width,
  },
  createAccountButton: {
    height: "auto",
  },
});

export default styles;
