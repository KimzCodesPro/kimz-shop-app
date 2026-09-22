import { spacing } from "@/constants";
import { useTheme } from "@/hooks";
import { StyleSheet } from "react-native";

const useStyles = () => {
  const colors = useTheme();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    tabs: {
      flexDirection: "row",
      paddingHorizontal: spacing.space24.width,
    },
    tab: {
      flex: 1,
      paddingVertical: spacing.space8.height,
      borderBottomWidth: 2,
      borderBottomColor: "transparent",
    },
    activeTab: {
      borderBottomColor: colors.primary.base,
    },
    tabContent: {
      flex: 1,
      marginTop: spacing.space24.height,
    },
  });

  return { styles, colors };
};

export default useStyles;
