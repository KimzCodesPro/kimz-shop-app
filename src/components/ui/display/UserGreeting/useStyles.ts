import { useTheme } from "@/hooks";
import { spacing } from "@/src/constants";
import { StyleSheet } from "react-native";

const useStyles = () => {
  const colors = useTheme();
  const styles = StyleSheet.create({
    container: {
      alignSelf: "stretch",
      flexDirection: "row",
      alignItems: "center",
      gap: spacing.space12.width,
    },
  });

  return { colors, styles };
};

export default useStyles;
