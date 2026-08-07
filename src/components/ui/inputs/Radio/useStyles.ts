import { opacity, radius, spacing } from "@/constants";
import { useTheme } from "@/hooks";
import { scalingMethods } from "@/utils";
import { StyleSheet } from "react-native";
const { HS, VS } = scalingMethods;

const useStyle = (selected: boolean, disabled?: boolean) => {
  const colors = useTheme();

  const styles = StyleSheet.create({
    wrapper: {
      alignSelf: "stretch",
      flexDirection: "row",
      alignItems: "center",
      gap: HS(12),
    },
    indicator: {
      justifyContent: "center",
      alignItems: "center",
      width: HS(20),
      height: VS(20),
      borderRadius: radius.full,
      borderWidth: HS(1.5),
      borderColor: selected ? colors.primary.base : colors.border.default,
      paddingVertical: spacing.space4.height,
      paddingHorizontal: spacing.space4.width,
      opacity: disabled ? opacity.disabled : opacity.full,
    },
    innerIndicator: {
      width: HS(10),
      height: VS(10),
      borderRadius: radius.full,
      backgroundColor: selected ? colors.primary.base : "transparent",
      opacity: disabled ? opacity.disabled : opacity.full,
    },
  });
  return { styles, colors };
};

export default useStyle;
