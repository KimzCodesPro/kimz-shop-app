import { View, ViewProps } from "react-native";
import useStyles from "./useStyles";

/**
 * Bar that holds the tab buttons. Rendered through `<TabList asChild />`,
 * so it receives TabList's own style (row layout) and must merge it.
 *
 * The outer view only holds the safe area, which keeps the bar itself at the
 * exact height the design asks for.
 */
const CustomBottomTab = ({ style, ...rest }: ViewProps) => {
  const { styles } = useStyles();

  return (
    <View style={styles.safeArea}>
      <View style={[style, styles.tabBar]} {...rest} />
    </View>
  );
};

export default CustomBottomTab;
