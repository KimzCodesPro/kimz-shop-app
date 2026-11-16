import { spacing } from "@/constants";
import { VS } from "@/utils/scaling";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  carouselContainer: {
    marginBottom: spacing.space24.height,
  },
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
  stockBadge: {
    position: "absolute",
    top: spacing.space12.height,
    end: spacing.space12.width,
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: spacing.space16.height,
  },
  colorSwitcherRow: {
    marginBottom: spacing.space16.height,
  },
  storeRow: {
    marginBottom: spacing.space16.height,
  },
  descriptionRow: {
    marginBottom: VS(129),
  },
});

export default styles;
