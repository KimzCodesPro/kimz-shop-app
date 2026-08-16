import { spacing } from "@/constants";
import { useTheme } from "@/hooks";
import { scalingMethods } from "@/utils";
import { StyleSheet } from "react-native";
const { HS, VS } = scalingMethods;

const useStyles = () => {
  const colors = useTheme();

  const styles = StyleSheet.create({
    container: {
      alignSelf: "stretch",
      gap: spacing.space16.height,
    },
    radioItem: {
      alignSelf: "stretch",
      flexDirection: "row",
      alignItems: "center",
      gap: HS(12),
      height: VS(30),
    },
  });

  return { styles, colors };
};

export default useStyles;
