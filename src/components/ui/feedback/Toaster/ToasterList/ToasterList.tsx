import { View } from "react-native";

import { useAppSelector } from "@/store/hooks";
import Toaster from "../Toaster";
import useStyles from "./useStyles";

const ToasterList = () => {
  const { styles } = useStyles();
  const toasts = useAppSelector((state) => state.toast.toasts);

  return (
    <View style={styles.container} pointerEvents="box-none">
      {toasts.map((toast) => (
        <Toaster
          key={toast.id}
          id={toast.id}
          type={toast.type}
          title={toast.title}
          description={toast.description}
        />
      ))}
    </View>
  );
};

export default ToasterList;
