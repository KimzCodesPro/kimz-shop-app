import { View, ViewProps } from "react-native";
import useStyles from "./useStyles";

/**
 * Bar that holds the tab buttons. Rendered through `<TabList asChild />`,
 * so it receives TabList's own style (row layout) and must merge it.
 */
const CustomBottomTab = ({ style, ...rest }: ViewProps) => {
  const styles = useStyles();

  return <View {...rest} style={[style, styles.tabBar]} />;
};

export default CustomBottomTab;
