import { spacing } from "@/constants";
import { StyleSheet } from "react-native";

const useStyles = () => {
  const styles = StyleSheet.create({
    container: {
      gap: spacing.space12.height,
    },
  });

  return { styles };
};

export default useStyles;
