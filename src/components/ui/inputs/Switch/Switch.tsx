import { Pressable, StyleProp, View, ViewStyle } from "react-native";
import useStyles from "./useStyles";

type SwitchProps = {
  value: boolean;
  onChange: () => void;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
};

const Switch = ({ value, onChange, style, disabled }: SwitchProps) => {
  const { styles } = useStyles(value, disabled);
  return (
    <Pressable
      style={[styles.container, style]}
      onPress={onChange}
      disabled={disabled}
    >
      <View style={styles.indicator} />
    </Pressable>
  );
};

export default Switch;
