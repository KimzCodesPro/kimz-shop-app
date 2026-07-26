import Icon from "@/components/icons";
import { Typography } from "@/components/ui/display";
import { ActivityIndicator, TouchableOpacity } from "react-native";
import { ButtonProps } from "./types";
import useStyles from "./useStyles";

const Button = ({
  title,
  onPress,
  icon,
  size = "lg",
  variant = "primary",
  disabled = false,
  loading = { indicator: false },
  style,
}: ButtonProps) => {
  const { styles, typographyColor } = useStyles(size, variant);

  const typographySizeVariant = size === "sm" ? "smallBold" : "normalBold";

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, style]}
      disabled={disabled || loading.indicator}
    >
      {!loading.indicator && icon && (
        <Icon name={icon} size={20} color={typographyColor} />
      )}
      {loading.indicator && (
        <ActivityIndicator size="small" color={typographyColor} />
      )}
      <Typography variant={typographySizeVariant} color={typographyColor}>
        {loading.indicator ? loading.text || title : title}
      </Typography>
    </TouchableOpacity>
  );
};

export default Button;
