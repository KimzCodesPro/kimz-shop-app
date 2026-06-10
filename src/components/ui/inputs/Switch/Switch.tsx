import { Pressable, StyleProp, View, ViewStyle } from "react-native";
import useStyles from "./useStyles";

type SwitchProps = {
  value: boolean;
  onValueChange: () => void;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
};

const Switch = ({ value, onValueChange, style, disabled }: SwitchProps) => {
  const { styles } = useStyles(value, disabled);
  return (
    <Pressable
      style={[styles.container, style]}
      onPress={onValueChange}
      disabled={disabled}
    >
      <View style={styles.indicator} />
    </Pressable>
  );
};

export default Switch;
