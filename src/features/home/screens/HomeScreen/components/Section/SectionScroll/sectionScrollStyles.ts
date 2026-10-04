import { spacing } from "@/constants";
import { StyleSheet } from "react-native";

const useStyles = () => {
  return StyleSheet.create({
    content: {
      gap: spacing.space12.width,
    },
  });
};

export default useStyles;
