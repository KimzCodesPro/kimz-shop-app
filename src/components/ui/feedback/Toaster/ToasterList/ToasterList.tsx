import { View } from "react-native";

import Toaster from "../Toaster";
import useStyles from "./useStyles";

const EXAMPLE_TOASTS = [1, 2, 3];

const ToasterList = () => {
  const { styles } = useStyles();

  return (
    <View style={styles.container} pointerEvents="box-none">
      {EXAMPLE_TOASTS.map((id) => (
        <Toaster key={id} />
      ))}
    </View>
  );
};

export default ToasterList;
