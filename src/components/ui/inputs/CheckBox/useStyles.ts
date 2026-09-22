import { opacity, radius } from "@/constants";
import { useTheme } from "@/hooks";
import { scalingMethods } from "@/utils";
import { StyleSheet } from "react-native";
const { HS, VS } = scalingMethods;

const useStyles = (isChecked: boolean, disabled?: boolean) => {
  const colors = useTheme();

  const styles = StyleSheet.create({
    container: {
      width: HS(20),
      height: VS(20),
      backgroundColor: isChecked ? colors.primary.base : "transparent",
      borderRadius: radius.xs,
      borderWidth: 1.5,
      borderColor: isChecked ? colors.primary.base : colors.border.default,
      opacity: disabled ? opacity.disabled : opacity.full,
    },
    // No opacity here — it sits inside the container, so a second one would
    // compound with it and render the check darker than the box.
    indicator: {
      justifyContent: "center",
      alignItems: "center",
    },
  });
  return { styles, colors };
};

export default useStyles;
