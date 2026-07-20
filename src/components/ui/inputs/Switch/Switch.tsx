import { Pressable, View } from "react-native";
import { SwitchProps } from "./types";
import useStyles from "./useStyles";

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
