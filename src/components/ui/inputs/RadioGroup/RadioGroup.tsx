import { View } from "react-native";

import Radio from "../Radio/Radio";
import { RadioGroupProps } from "./types";
import useStyles from "./useStyles";

const RadioGroup = ({
  options,
  selectedValue,
  onValueChange,
}: RadioGroupProps) => {
  const { styles } = useStyles();

  return (
    <View style={styles.container}>
      {options.map((option) => (
        <View key={option.value} style={styles.radioItem}>
          <Radio
            key={option.value}
            isSelected={selectedValue === option.value}
            onChange={() => onValueChange(option.value)}
            title={option.label}
          />
        </View>
      ))}
    </View>
  );
};

export default RadioGroup;
