import { spacing } from "@/constants";
import { scalingMethods } from "@/utils";
import { StyleSheet } from "react-native";
const { HS, VS } = scalingMethods;

// The artwork is drawn at 72 × 120, so width and height scale on their own
// axis — HS for one, VS for the other — the way non-square images should.
const PREVIEW_WIDTH = HS(72);
const PREVIEW_HEIGHT = VS(141);

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
      height: PREVIEW_HEIGHT,
      width: PREVIEW_WIDTH,
    },
  });

  return { styles };
};

export default useStyles;
