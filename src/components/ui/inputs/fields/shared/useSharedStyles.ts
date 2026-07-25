import { radius, spacing } from "@/constants";
import { useFontStyles, useTheme } from "@/hooks";
import { scalingMethods } from "@/utils";
import { Platform, StyleSheet } from "react-native";
import { StatusType } from "./types";
const { HS, VS } = scalingMethods;

const useSharedStyles = (inputCurrentStatus: StatusType) => {
  const colors = useTheme();
  const fontFamilyStyles = useFontStyles();

  const isAndroid = Platform.OS === "android";

  const colorMapping: Record<StatusType, string> = {
    default: colors.foreground.tertiary,
    focused: colors.primary.base,
    filled: colors.primary.base,
    error: colors.danger.base,
  };

  const statusColor = colorMapping[inputCurrentStatus];

  const styles = StyleSheet.create({
    container: {
      alignSelf: "stretch",
    },
    inputWrapper: {
      height: VS(52),
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: spacing.space12.width,
      paddingVertical: spacing.space12.height,
      borderWidth: HS(1),
      borderColor: statusColor,
      borderRadius: radius.sm,
      backgroundColor: colors.background.base,
      gap: spacing.space8.width,
    },
    pressable: {
      alignSelf: "stretch",
    },
    optionsList: {
      alignSelf: "stretch",
    },
    option: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      height: VS(47),
      borderBottomWidth: HS(1),
      borderBottomColor: colors.border.default,
    },
    textInput: {
      alignSelf: "stretch",
      flex: 1,
      color: colors.foreground.primary,
      ...fontFamilyStyles.smallRegular,
      lineHeight: isAndroid ? fontFamilyStyles.smallRegular.lineHeight : 0,
      textAlignVertical: "center",
      textAlign: "left",
      writingDirection: "ltr",
      paddingVertical: 0,
      includeFontPadding: false,
    },
  });
  return { styles, colors, statusColor };
};

export default useSharedStyles;
