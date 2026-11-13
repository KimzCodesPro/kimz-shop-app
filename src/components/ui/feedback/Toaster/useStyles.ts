import { spacing } from "@/constants";
import radius from "@/constants/radius";
import { useTheme } from "@/hooks";
import { HS, VS } from "@/utils";
import { StyleSheet } from "react-native";

const useStyles = () => {
  const colors = useTheme();

  const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.background.base,
      borderWidth: 2,
      borderRadius: radius.lg,
      borderColor: colors.success.base,
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
      backgroundColor: colors.success.tint,
    },
    messageContainer: {
      alignSelf: "flex-start",
    },
    progress: {
      position: "absolute",
      bottom: 0,
      left: 0,
      height: VS(3),
      backgroundColor: colors.success.base,
    },
  });

  return { styles, colors };
};

export default useStyles;
