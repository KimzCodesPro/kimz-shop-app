import { spacing } from "@/constants";
import { useTheme } from "@/hooks";
import { VS } from "@/utils";
import { StyleSheet } from "react-native";

const useStyles = () => {
  const colors = useTheme();
  const styles = StyleSheet.create({
    separator: {
      height: VS(1),
      marginVertical: spacing.space16.height  ,
      backgroundColor: colors.border.default,
    },
  });

  return { styles, colors };
};

export default useStyles;
