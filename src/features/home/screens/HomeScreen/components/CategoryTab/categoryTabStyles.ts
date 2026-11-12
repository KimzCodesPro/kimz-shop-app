import { spacing } from "@/constants";
import { CONTENT_PADDING_HORIZONTAL } from "@/components/ui/layout/ScreenLayout/constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    gap: spacing.space16.height,
    paddingHorizontal: CONTENT_PADDING_HORIZONTAL,
  },
});

export default styles;
