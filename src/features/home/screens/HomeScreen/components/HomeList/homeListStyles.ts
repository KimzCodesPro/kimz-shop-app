import { CONTENT_PADDING_HORIZONTAL } from "@/components/ui/layout/ScreenLayout/constants";
import { spacing } from "@/constants";
import { scalingMethods } from "@/utils";
import { StyleSheet } from "react-native";
const { HS } = scalingMethods;

const styles = StyleSheet.create({
  SectionsContainer: {
    marginTop: spacing.space24.height,
    gap: spacing.space24.height,
  },
  product: {
    width: HS(140),
  },
  horizontalPadding: {
    paddingHorizontal: CONTENT_PADDING_HORIZONTAL,
  },
});

export default styles;
