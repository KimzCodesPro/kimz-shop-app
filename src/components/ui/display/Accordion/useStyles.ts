import { spacing } from "@/constants";
import { useTheme } from "@/hooks";
import { scalingMethods } from "@/utils";
import { StyleSheet } from "react-native";
const { HS } = scalingMethods;
const useStyles = () => {
  const colors = useTheme();

  const styles = StyleSheet.create({
    container: {
      alignSelf: "stretch",
    },
    item: {
      borderBottomWidth: HS(1),
      borderBottomColor: colors.border.default,
      justifyContent: "center",
      paddingVertical: spacing.space16.height,
    },
    itemHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      height: HS(22),
    },
    itemDescription: {
      paddingTop: spacing.space12.height,
    },
  });

  return { styles, colors };
};

export default useStyles;
