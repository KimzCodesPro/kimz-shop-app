import { spacing } from "@/constants";
import { StyleSheet } from "react-native";

const useStyles = () => {
  return StyleSheet.create({
    content: {
      gap: spacing.space16.width,
    },
  });
};

export default useStyles;
