import Icon from "@/components/icons";
import { TouchableOpacity } from "react-native";
import { IconButtonProps } from "./types";
import useStyles from "./useStyles";
import { ACTION_ICON_SIZE } from "./constants";

const IconButton = ({
  icon,
  onPress,
  variant = "primary",
  disabled = false,
  style,
}: IconButtonProps) => {
  const { styles, iconColor } = useStyles(variant, disabled);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, style]}
      disabled={disabled}
    >
      <Icon name={icon} size={ACTION_ICON_SIZE} color={iconColor} />
    </TouchableOpacity>
  );
};

export default IconButton;
