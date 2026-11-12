import { radius, spacing } from "@/constants";
import { useTheme } from "@/hooks";
import { HS, VS } from "@/utils";
import { StyleSheet } from "react-native";

const useStyles = () => {
  const colors = useTheme();
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      gap: spacing.space12.width,
    },
    productImage: {
      width: HS(71),
      height: VS(88),
      borderRadius: radius.md,
    },
    detailsContainer: {
      flex: 1,
      alignSelf: "stretch",
      justifyContent: "space-between",
    },
    detailsContainerColor: {
      flexDirection: "row",
      gap: spacing.space4.width,
    },
    detailsContainerQuantity: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
  });

  return { styles, colors };
};

export default useStyles;
