import { customBottomTab } from "@/constants";
import { useTheme } from "@/hooks";
import { scalingMethods } from "@/utils";
import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
const { HS } = scalingMethods;

const useStyles = () => {
  const colors = useTheme();
  // The headless <Tabs /> has no built-in safe area handling, so the bar
  // grows by the inset and pads it out to keep the buttons above the edge.
  const insets = useSafeAreaInsets();

  const styles = StyleSheet.create({
    tabBar: {
      height: customBottomTab.contentHeight + insets.bottom,
      paddingBottom: insets.bottom,
      borderTopWidth: HS(1),
      borderTopColor: colors.border.default,
      backgroundColor: colors.background.base,
    },
  });

  return styles;
};

export default useStyles;
