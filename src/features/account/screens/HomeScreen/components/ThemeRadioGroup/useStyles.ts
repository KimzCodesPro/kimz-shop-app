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
      alignSelf: "stretch",
      gap: spacing.space24.width,
    },
    // Each option stacks its preview above its radio.
    option: {
      alignItems: "center",
      gap: VS(12),
    },
    preview: {
      height: VS(156),
      width: HS(72),
    },
  });

  return { styles };
};

export default useStyles;
