import { Pressable, View } from "react-native";
import { Typography } from "../../display";
import { SwitchProps } from "./types";
import useStyles from "./useStyles";

const Switch = ({
  isSelected,
  onChange,
  style,
  disabled,
  title,
}: SwitchProps) => {
  const { styles, colors } = useStyles(isSelected, disabled);

  return (
    <Pressable
      style={[styles.wrapper, style]}
      onPress={onChange}
      disabled={disabled}
      accessibilityRole="switch"
      accessibilityState={{ checked: isSelected, disabled }}
    >
      <Typography
        variant="smallBold"
        textTransform="capitalize"
        color={colors.foreground.primary}
      >
        {title}
      </Typography>
      <View style={styles.track}>
        <View style={styles.indicator} />
      </View>
    </Pressable>
  );
};

export default Switch;
