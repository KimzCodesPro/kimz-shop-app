import { spacing } from "@/constants";
import { CONTENT_PADDING_HORIZONTAL } from "@/src/components/ui/layout/ScreenLayout/constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    gap: spacing.space16.height,
  },
  searchInput: {
    pointerEvents: "none",
  },
  horizontalPadding: {
    paddingHorizontal: CONTENT_PADDING_HORIZONTAL,
  },
});

export default styles;
