import { CONTENT_PADDING_HORIZONTAL } from "@/components/ui/layout/ScreenLayout/constants";
import { spacing } from "@/constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    gap: spacing.space16.height,
  },
  title: {
    paddingHorizontal: CONTENT_PADDING_HORIZONTAL,
  },
  scrolling: {
    paddingStart: CONTENT_PADDING_HORIZONTAL,
  },
});

export default styles;
