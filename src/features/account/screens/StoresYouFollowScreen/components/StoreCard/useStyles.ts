import { radius, spacing } from "@/constants";
import { useTheme } from "@/hooks";
import { HS, VS } from "@/utils/scaling";
import { StyleSheet } from "react-native";

const useStyles = () => {
  const colors = useTheme();

  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      gap: spacing.space12.width,
      backgroundColor: colors.background.surface,
      borderColor: colors.background.surface,
    },
    image: {
      width: spacing.space40.width,
      height: spacing.space40.width,
      borderRadius: radius.sm,
    },
    info: {
      gap: spacing.space4.height,
    },
    button: {
      alignSelf: "center",
      marginLeft: "auto",
      width: HS(82),
      height: VS(30),
    },
  });

  return { styles, colors };
};

export default useStyles;
