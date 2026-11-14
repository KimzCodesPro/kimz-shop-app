import { spacing } from "@/constants";
import radius from "@/constants/radius";
import { useTheme } from "@/hooks";
import { HS, VS } from "@/utils";
import { ToastType } from "@/types";
import { StyleSheet } from "react-native";
import { getToasterColors } from "./constants";

const useStyles = (type: ToastType) => {
  const colors = useTheme();
  const toasterColors = getToasterColors(colors, type);

  const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.background.base,
      borderWidth: 2,
      borderRadius: radius.lg,
      borderColor: toasterColors.border,
      marginHorizontal: spacing.space12.width,
      overflow: "hidden",
    },
    contentContainer: {
      flexDirection: "row",
      alignItems: "center",
      gap: spacing.space12.width,
      paddingVertical: spacing.space12.height,
      paddingHorizontal: spacing.space12.width,
    },
    iconContainer: {
      alignSelf: "flex-start",
      justifyContent: "center",
      alignItems: "center",
      width: HS(28),
      height: VS(28),
      borderRadius: radius.full,
      backgroundColor: toasterColors.iconBackground,
    },
    messageContainer: {
      alignSelf: "flex-start",
    },
    progress: {
      position: "absolute",
      bottom: 0,
      left: 0,
      height: VS(3),
      backgroundColor: toasterColors.border,
    },
  });

  return { styles, colors, toasterColors };
};

export default useStyles;
