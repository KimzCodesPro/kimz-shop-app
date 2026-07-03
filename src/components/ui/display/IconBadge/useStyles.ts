import { radius } from "@/constants";
import { useTheme } from "@/hooks";
import { scalingMethods } from "@/utils";
import { StyleSheet } from "react-native";
const { HS } = scalingMethods;

const useStyles = () => {
  const colors = useTheme();

  const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      justifyContent: "center",
      height: HS(45),
      width: HS(45),
      borderRadius: radius.full,
      backgroundColor: colors.background.surface,
    },
  });

  return { styles, colors };
};

export default useStyles;
