import { spacing } from "@/constants";
import { useTheme } from "@/hooks";
import { StyleSheet } from "react-native";

const useStyles = () => {
  const colors = useTheme();

  const styles = StyleSheet.create({
    header: {
      marginBottom: spacing.space32.height,
      gap: spacing.space8.height,
    },
  });

  return { styles, colors };
};

export default useStyles;
