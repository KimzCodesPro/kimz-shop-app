import { CONTENT_PADDING_HORIZONTAL } from "@/src/components/ui/layout/ScreenLayout/constants";
import { spacing } from "@/src/constants";
import { scalingMethods } from "@/utils";
import { StyleSheet } from "react-native";
const { HS } = scalingMethods;

const styles = StyleSheet.create({
  scrollingSections: {
    marginTop: spacing.space16.height,
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
