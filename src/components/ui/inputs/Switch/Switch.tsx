import { Pressable, StyleProp, View, ViewStyle } from "react-native";
import useStyles from "./useStyles";

type SwitchProps = {
  value: boolean;
  onValueChange: () => void;
  style?: StyleProp<ViewStyle>;
};

const Switch = ({ value, onValueChange, style }: SwitchProps) => {
  const { styles } = useStyles(value);
  return (
    <Pressable style={[styles.container, style]} onPress={onValueChange}>
      <View style={styles.indicator} />
    </Pressable>
  );
};

export default Switch;
