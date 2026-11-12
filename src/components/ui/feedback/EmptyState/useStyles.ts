import spacing from "@/constants/spacing";
import { useTheme } from "@/hooks";
import { StyleSheet } from "react-native";

const useStyles = () => {
  const colors = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    textContainer: {
      marginVertical: spacing.space24.height,
      gap: spacing.space12.height,
    },
    action: {

    },
  });

  return { styles, colors };
};

export default useStyles;
