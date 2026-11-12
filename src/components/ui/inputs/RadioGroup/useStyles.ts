import { spacing } from "@/constants";
import { useTheme } from "@/hooks";
import { VS } from "@/utils";
import { StyleSheet } from "react-native";

const useStyles = () => {
  const colors = useTheme();

  const styles = StyleSheet.create({
    container: {
      alignSelf: "stretch",
      gap: spacing.space12.height,
    },
    radioItem: {
      alignSelf: "stretch",
      flexDirection: "row",
      alignItems: "center",
      gap: spacing.space12.height,
      height: VS(30),
    },
  });

  return { styles, colors };
};

export default useStyles;
