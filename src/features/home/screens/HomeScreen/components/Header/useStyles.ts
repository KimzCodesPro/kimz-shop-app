import { StyleSheet } from "react-native";
import { useTheme } from "@/hooks";
import { scalingMethods } from "@/utils";
import radius from "@/src/constants/radius";
import spacing from "@/src/constants/spacing";
const { HS } = scalingMethods;

const useStyles = () => {
  const colors = useTheme();
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: spacing.space16.height,
    },
    iconContainer: {
      flexDirection: "row",
      gap: HS(12),
    },
    notifcationIndicator: {
      width: HS(6),
      height: HS(6),
      borderRadius: radius.full,
      backgroundColor: colors.danger.base,
      position: "absolute",
      top: 0,
      end: 0,
    },
  });

  return { styles, colors };
};

export default useStyles;
