import { radius, spacing } from "@/constants";
import { useTheme } from "@/hooks";
import { scalingMethods } from "@/utils";
import { StyleSheet } from "react-native";
const { HS, VS } = scalingMethods;

const useStyles = (isSelected?: boolean) => {
  const colors = useTheme();
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
  });

  return { styles };
};

export default useStyles;
