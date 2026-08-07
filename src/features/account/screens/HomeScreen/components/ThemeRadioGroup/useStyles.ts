import { spacing } from "@/constants";
import { scalingMethods } from "@/utils";
import { StyleSheet } from "react-native";
const { HS, VS } = scalingMethods;

const useStyles = () => {
  const styles = StyleSheet.create({
    // Row, unlike RadioGroup's column — the options sit side by side because
    // each one is a tall preview rather than a single line of text.
    container: {
      flexDirection: "row",
      justifyContent: "center",
      gap: spacing.space32.width,
    },
    option: {
      alignItems: "center",
      gap: spacing.space8.height,
    },
    preview: {
      height: VS(152),
      width: HS(77),
    },
  });

  return { styles };
};

export default useStyles;
