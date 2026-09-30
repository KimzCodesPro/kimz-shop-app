import { useTheme } from "@/hooks";
import { radius } from "@/src/constants";
import { StatusVariant } from "@/src/types";
import { scalingMethods } from "@/utils";
import { StyleSheet } from "react-native";
import { statusHaloColor } from "./constants";
const { HS, VS } = scalingMethods;

const useStyles = (variant: StatusVariant) => {
  const colors = useTheme();

  const currentColors = statusHaloColor(colors)[variant];

  const styles = StyleSheet.create({
    halo: {
      width: HS(130),
      height: VS(130),
      borderRadius: radius.full,
      backgroundColor: currentColors.halo,
      alignItems: "center",
      justifyContent: "center",
    },
    inner: {
      width: HS(90),
      height: VS(90),
      borderRadius: radius.full,
      backgroundColor: currentColors.inner,
      alignItems: "center",
      justifyContent: "center",
    },
  });
  return { styles, colors };
};

export default useStyles;
