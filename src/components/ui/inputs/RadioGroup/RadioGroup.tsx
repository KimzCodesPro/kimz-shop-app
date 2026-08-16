import { Pressable, View } from "react-native";

import { Typography } from "../../display";
import Radio from "../Radio/Radio";
import { RadioGroupProps } from "./types";
import useStyles from "./useStyles";

const RadioGroup = ({
  options,
  selectedValue,
  onValueChange,
}: RadioGroupProps) => {
  const { styles, colors } = useStyles();

  return (
    <View style={styles.container}>
      {options.map((option) => {
        const isSelected = selectedValue === option.value;

        return (
          // The whole row is pressable, so the label picks the option too —
          // the indicator alone would be a small target.
          <Pressable
            key={option.value}
            style={styles.radioItem}
            onPress={() => onValueChange(option.value)}
            disabled={option.disabled}
            accessibilityRole="radio"
            accessibilityState={{
              selected: isSelected,
              disabled: option.disabled,
            }}
            accessibilityLabel={option.label}
          >
            <Radio isSelected={isSelected} disabled={option.disabled} />

            <Typography
              variant="smallBold"
              textTransform="capitalize"
              color={colors.foreground.primary}
            >
              {option.label}
            </Typography>
          </Pressable>
        );
      })}
    </View>
  );
};

export default RadioGroup;
