import { radius, spacing } from "@/constants";
import { useFontStyles, useTheme, useTranslation } from "@/hooks";
import { scalingMethods } from "@/utils";
import { Platform, StyleSheet } from "react-native";
import { fieldStatusColor } from "./helper";
import { StatusType } from "./types";
const { VS } = scalingMethods;

const useSharedStyles = (currentStatus: StatusType) => {
  const colors = useTheme();
  const fontFamilyStyles = useFontStyles();
  const { direction } = useTranslation();

  const isAndroid = Platform.OS === "android";

  // Match Typography: align off the app direction rather than "auto", which
  // resolves from the typed content and would jump sides mid-entry.
  const isRTL = direction === "rtl";
  const textAlign = isRTL ? "right" : "left";
  const writingDirection = isRTL ? "rtl" : "ltr";

  const colorMapping = fieldStatusColor(colors);

  const mainColor = colorMapping.mainColor[currentStatus];
  const iconColor = colorMapping.iconColor[currentStatus];

  const styles = StyleSheet.create({
    container: {
      alignSelf: "stretch",
    },
    fieldWrapper: {
      height: VS(52),
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: spacing.space12.width,
      paddingVertical: spacing.space12.height,
      borderWidth: 1,
      borderColor: mainColor,
      borderRadius: radius.sm,
      gap: spacing.space8.width,
    },
    pressableWrapper: {
      alignSelf: "stretch",
    },
    dropdownValueText: {
      flex: 1,
    },
    dropdownOption: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      height: VS(47),
      borderBottomWidth: 1,
      borderBottomColor: colors.border.default,
    },
    textInput: {
      alignSelf: "stretch",
      flex: 1,
      color: colors.foreground.primary,
      ...fontFamilyStyles.smallRegular,
      lineHeight: isAndroid ? fontFamilyStyles.smallRegular.lineHeight : 0,
      textAlignVertical: "center",
      textAlign,
      writingDirection,
      paddingVertical: 0,
      includeFontPadding: false,
    },
  });
  return { styles, colors, iconColor };
};

export default useSharedStyles;
