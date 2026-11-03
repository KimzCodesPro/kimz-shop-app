import Icon from "@/components/icons";
import { Pressable } from "react-native";
import { IconButtonProps } from "./types";
import useStyles from "./useStyles";

const IconButton = ({
  icon,
  onPress,
  variant = "primary",
  disabled = false,
  style,
}: IconButtonProps) => {
  const { styles, iconColor } = useStyles(variant, disabled);

  return (
    <Pressable
      onPress={onPress}
      style={[styles.button, style]}
      disabled={disabled}
    >
      <Icon name={icon} size="xl" color={iconColor} />
    </Pressable>
  );
};

export default IconButton;
