import { spacing } from "@/constants";
import { useTheme } from "@/hooks";
import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const useStyles = () => {
  const colors = useTheme();
  const insets = useSafeAreaInsets();

  const styles = StyleSheet.create({
    container: {
      position: "absolute",
      top: insets.top,
      left: 0,
      right: 0,
      zIndex: 10000,
      gap: spacing.space8.height,
    },
  });

  return { styles, colors };
};

export default useStyles;
