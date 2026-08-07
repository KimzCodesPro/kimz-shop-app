import { View } from "react-native";

import Switch from "../Switch/Switch";
import { SwitchGroupProps } from "./types";
import useStyles from "./useStyles";

const SwitchGroup = ({
  options,
  selectedValues,
  onValueChange,
}: SwitchGroupProps) => {
  const { styles } = useStyles();

  return (
    <View style={styles.container}>
      {options.map((option) => (
        <View key={option.value} style={styles.switchItem}>
          <Switch
            isSelected={selectedValues.includes(option.value)}
            onChange={() => onValueChange(option.value)}
            title={option.label}
          />
        </View>
      ))}
    </View>
  );
};

export default SwitchGroup;
