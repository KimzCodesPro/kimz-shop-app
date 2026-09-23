import { radius, spacing } from "@/constants";
import { useTheme } from "@/hooks";
import { scalingMethods } from "@/utils";
import { StyleSheet } from "react-native";
const { VS, HS } = scalingMethods;

const useStyles = () => {
  const colors = useTheme();

  const styles = StyleSheet.create({
    container: {
      gap: spacing.space12.height,
      padding: spacing.space12.width,
      borderRadius: radius.lg,
      borderWidth: 1,
      borderColor: colors.border.default,
    },
    header: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    productsInfo: {
      paddingVertical: spacing.space12.height,
      borderTopWidth: 1,
      borderColor: colors.border.default,
      borderBottomWidth: 1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    productInfoTitle: {},
    productInfoImages: {
      flexDirection: "row",
    },
    productImage: {
      width: HS(28),
      height: VS(28),
      borderRadius: radius.full,
      borderWidth: 2,
      borderColor: colors.background.base,
      marginRight: -HS(7),
    },
    total: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    actions: {
      flexDirection: "row",
      gap: spacing.space12.width,
    },
    action: {
      flex: 1,
    },
  });

  return { styles, colors };
};

export default useStyles;
