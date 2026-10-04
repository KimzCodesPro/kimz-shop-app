import { useTheme } from "@/hooks";
import radius from "@/src/constants/radius";
import spacing from "@/src/constants/spacing";
import { scalingMethods } from "@/utils";
import { StyleSheet } from "react-native";
const { VS, HS } = scalingMethods;

const useStyles = () => {
  const colors = useTheme();

  const styles = StyleSheet.create({
    container: {
      gap: spacing.space8.height,
      alignItems: "center",
    },
    logo: {
      width: HS(64),
      height: VS(64),
      borderRadius: radius.full,
    },
  });

  return { styles, colors };
};

export default useStyles;
