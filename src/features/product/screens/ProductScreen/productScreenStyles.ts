import { spacing } from "@/constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  carouselImage: {
    width: "100%",
    height: "100%",
  },
  // dots sit on top of the images, 16 from the bottom
  carouselIndicator: {
    position: "absolute",
    bottom: spacing.space16.height,
    left: 0,
    right: 0,
  },
});

export default styles;
