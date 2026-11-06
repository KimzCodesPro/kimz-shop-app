import { View } from "react-native";
import type { SeparatorProps } from "./types";
import useStyles from "./useStyles";

const Separator = ({ space = "lg" }: SeparatorProps) => {
  const { styles } = useStyles(space);

  return <View style={styles.separator} />;
};

export default Separator;
