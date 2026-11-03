import { radius } from "@/constants";
import { useTheme } from "@/hooks";
import { HS, VS } from "@/utils";
import { StyleSheet } from "react-native";
import { QUANTITY_STEPPER_SIZE } from "./constants";
import { QuantityStepperSize } from "./types";

const useStyles = (size: QuantityStepperSize) => {
  const colors = useTheme();

  const currentSize = QUANTITY_STEPPER_SIZE[size];

  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      width: HS(currentSize.width),
      height: VS(currentSize.height),
      borderWidth: 1,
      borderRadius: radius.full,
      borderColor: colors.border.default,
      backgroundColor: colors.background.base,
      paddingHorizontal: HS(4),
    },
    increase: {
      width: HS(currentSize.button),
      height: HS(currentSize.button),
      borderRadius: radius.full,
      backgroundColor: colors.primary.base,
      alignItems: "center",
      justifyContent: "center",
    },
    decrease: {
      width: HS(currentSize.button),
      height: HS(currentSize.button),
      borderRadius: radius.full,
      backgroundColor: colors.background.base,
      borderWidth: 1,
      borderColor: colors.border.default,
      alignItems: "center",
      justifyContent: "center",
    },
  });

  return { styles, colors, iconSize: currentSize.icon };
};

export default useStyles;
