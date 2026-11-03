import { spacing } from "@/constants";
import { useTheme } from "@/hooks";
import { HS, VS } from "@/utils";
import { StyleSheet } from "react-native";

const useStyles = () => {
  const colors = useTheme();

  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "center",
    },
    option: {
      flex: 1,
      alignItems: "center",
      gap: spacing.space12.height,
    },
    preview: {
      height: VS(156),
      width: HS(72),
    },
    label: {
      flexDirection: "row",
      alignItems: "center",
      gap: spacing.space12.width,
    },
  });

  return { styles, colors };
};

export default useStyles;
