import { radius, spacing } from "@/constants";
import { useTheme } from "@/hooks";
import { scalingMethods } from "@/utils";
import { StyleSheet } from "react-native";
const { HS, VS } = scalingMethods;

const useStyles = (isSelected?: boolean) => {
  const colors = useTheme();

  const locationTintColorType = {
    home: colors.success.tint,
    apartment: colors.warning.tint,
    office: colors.primary.tint,
    other: colors.danger.tint,
  };

  const locationStrongColorType = {
    home: colors.success.strong,
    apartment: colors.warning.base,
    office: colors.primary.pressed,
    other: colors.danger.strong,
  };

  const styles = StyleSheet.create({
    container: {
      alignSelf: "stretch",
      alignItems: "center",
      justifyContent: "space-between",
      flexDirection: "row",
      height: VS(96),
      paddingVertical: spacing.space16.height,
      paddingHorizontal: spacing.space16.width,
      borderRadius: radius.lg,
      borderWidth: HS(1),
      borderColor: isSelected ? colors.primary.base : colors.border.default,
      backgroundColor: colors.background.base,
    },
    rightInfo: {
      gap: spacing.space4.height,
    },
    rightInfoTitle: {
      color: colors.foreground.primary,
    },
    rightInfoDescription: {
      color: colors.foreground.tertiary,
    },
    addressLocation: {
      alignItems: "flex-end",
      gap: spacing.space4.height,
    },
  });

  return { styles, colors, locationTintColorType, locationStrongColorType };
};

export default useStyles;
