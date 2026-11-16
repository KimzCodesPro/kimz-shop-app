import { CONTENT_PADDING_HORIZONTAL } from "@/components/ui/layout/ScreenLayout/constants";
import { spacing } from "@/constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    gap: spacing.space16.height,
  },
  // stays as scroll content padding (not Gutter): the row starts aligned
  // with the gutter but cards still scroll all the way to the screen edge
  scrolling: {
    paddingStart: CONTENT_PADDING_HORIZONTAL,
  },
});

export default styles;
