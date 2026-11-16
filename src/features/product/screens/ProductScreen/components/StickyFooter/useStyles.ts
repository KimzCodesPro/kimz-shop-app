import spacing from "@/constants/spacing";
import { useTheme } from "@/hooks";
import { HS, VS } from "@/utils";
import { StyleSheet } from "react-native";

const useStyles = () => {
  const colors = useTheme();

  const styles = StyleSheet.create({
    // pinned to the bottom of the screen, above the scroll content
    container: {
      backgroundColor: colors.background.base,
      height: VS(129),
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
    },
    content: {
      gap: spacing.space20.height,
      paddingTop: spacing.space12.height,
      paddingHorizontal: spacing.space24.width,
    },
    amountRow: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    // total at the start, button at the end
    checkoutRow: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    total: {
      gap: spacing.space4.height,
    },
    addToCartButton: {
      width: HS(139),
      // Button sets alignSelf: "stretch" on itself, which ignores the row's
      // alignItems; center it against the total block instead
      alignSelf: "center",
    },
  });

  return { styles, colors };
};

export default useStyles;
