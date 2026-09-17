import Icon from "@/components/icons";
import { TouchableOpacity } from "react-native";
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
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, style]}
      disabled={disabled}
    >
      <Icon name={icon} size={28} color={iconColor} />
    </TouchableOpacity>
  );
};

export default IconButton;
