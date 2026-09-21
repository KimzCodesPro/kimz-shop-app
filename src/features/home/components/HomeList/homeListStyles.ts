import { spacing } from "@/constants";
import { Dimensions, StyleSheet } from "react-native";

const { width: screenWidth } = Dimensions.get("window");

const PRODUCTS_COLUMN_GAP = spacing.space16.width;

const PRODUCT_CARD_WIDTH =
  (screenWidth - spacing.space24.width * 2 - PRODUCTS_COLUMN_GAP) / 2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: spacing.space16.height,
  },
  productsList: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: PRODUCTS_COLUMN_GAP,
  },
  productCard: {
    width: PRODUCT_CARD_WIDTH,
  },
});

export default styles;
