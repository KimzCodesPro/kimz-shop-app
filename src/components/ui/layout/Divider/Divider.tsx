import { View } from "react-native";
import type { DividerProps } from "./types";
import useStyles from "./useStyles";

const Divider = ({ space = "none" }: DividerProps) => {
  const { styles } = useStyles(space);

  return <View style={styles.divider} />;
};

export default Divider;
