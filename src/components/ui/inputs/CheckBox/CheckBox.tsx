import Icon from "@/components/icons";
import { Pressable, StyleProp, View, ViewStyle } from "react-native";
import useStyles from "./useStyles";

type CheckBoxProps = {
  isChecked: boolean;
  disabled?: boolean;
  onChange: () => void;
  style?: StyleProp<ViewStyle>;
};
const CheckBox = ({ isChecked, disabled, onChange, style }: CheckBoxProps) => {
  const { styles, colors } = useStyles(isChecked, disabled);

  return (
    <Pressable
      onPress={onChange}
      disabled={disabled}
      style={[styles.container, style]}
    >
      {isChecked && (
        <View style={styles.indicator}>
          <Icon name="check" size={16} color={colors.foreground.contrast} />
        </View>
      )}
    </Pressable>
  );
};

export default CheckBox;
