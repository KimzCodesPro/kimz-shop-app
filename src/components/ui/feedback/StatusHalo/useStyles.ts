import { radius } from "@/constants";
import { useTheme } from "@/hooks";
import { StatusVariant } from "@/types";
import { HS, VS } from "@/utils";
import { StyleSheet } from "react-native";
import { getStatusHaloColors } from "./helpers";

const useStyles = (variant: StatusVariant) => {
  const colors = useTheme();

  const colorVariant = getStatusHaloColors(colors, variant);

  const styles = StyleSheet.create({
    halo: {
      width: HS(130),
      height: VS(130),
      borderRadius: radius.full,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colorVariant.halo,
    },
    inner: {
      width: HS(90),
      height: VS(90),
      borderRadius: radius.full,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colorVariant.inner,
    },
  });
  return { styles, colors };
};

export default useStyles;
