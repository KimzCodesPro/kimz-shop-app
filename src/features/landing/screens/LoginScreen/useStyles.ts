import { spacing } from "@/constants";
import { useTheme } from "@/hooks";
import { StyleSheet } from "react-native";

const useStyles = () => {
  const colors = useTheme();

  const styles = StyleSheet.create({
    container: {
      paddingTop: spacing.space24.height,
    },
    form: {
      gap: spacing.space16.height,
    },
    forgotPasswordButton: {
      alignSelf: "flex-end",
      marginTop: -spacing.space12.height,
    },
    actions: {
      marginTop: "auto",
      gap: spacing.space8.height,
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
  });

  return { styles, colors };
};

export default useStyles;
