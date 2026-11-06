import { View } from "react-native";
import useStyles from "./useStyles";

const Separator = () => {
  const { styles } = useStyles();

  return <View style={styles.separator} />;
};

export default Separator;
