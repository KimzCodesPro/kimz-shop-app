import Icon from "@/components/icons";
import { View } from "react-native";
import { CheckBoxProps } from "./types";
import useStyles from "./useStyles";

// Presentational only — like Radio and Switch, the row that holds the box owns
// the press target and the a11y role.
const CheckBox = ({ isChecked, disabled, style }: CheckBoxProps) => {
  const { styles, colors } = useStyles(isChecked, disabled);

  return (
    <View style={[styles.container, style]}>
      {isChecked && (
        <View style={styles.indicator}>
          <Icon name="check" size={16} color={colors.foreground.contrast} />
        </View>
      )}
    </View>
  );
};

export default CheckBox;
