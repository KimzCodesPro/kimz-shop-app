import { Pressable, View } from "react-native";

import { Typography } from "../../display";
import Switch from "../Switch/Switch";
import { SwitchGroupProps } from "./types";
import useStyles from "./useStyles";

const SwitchGroup = ({ options, onValueChange }: SwitchGroupProps) => {
  const { styles, colors } = useStyles();

  return (
    <View style={styles.container}>
      {options.map((option) => (
        // The whole row is pressable, so the label toggles the option too —
        // the track alone would be a small target.
        <Pressable
          key={option.value}
          style={styles.switchItem}
          onPress={() => onValueChange(option.value)}
          disabled={option.disabled}
          accessibilityRole="switch"
          accessibilityState={{
            checked: option.isSelected,
            disabled: option.disabled,
          }}
          accessibilityLabel={option.label}
        >
          <Typography
            variant="smallBold"
            textTransform="capitalize"
            color={colors.foreground.primary}
          >
            {option.label}
          </Typography>

          <Switch isSelected={option.isSelected} disabled={option.disabled} />
        </Pressable>
      ))}
    </View>
  );
};

export default SwitchGroup;
