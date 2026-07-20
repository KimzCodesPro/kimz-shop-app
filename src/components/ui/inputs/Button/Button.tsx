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
  const { styles, color } = useStyles(size, variant);

  const typographySizeVariant = size === "sm" ? "smallBold" : "normalBold";

  const typographyColorVariant = {
    primary: color.foreground.contrast,
    chip: color.primary.base,
    link: color.primary.base,
    ghost: color.foreground.primary,
    danger: color.danger.base,
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, style]}
      disabled={disabled || loading.indicator}
    >
      {!loading.indicator && icon && (
        <Icon name={icon} size={20} color={typographyColorVariant[variant]} />
      )}
      {loading.indicator && (
        <ActivityIndicator
          size="small"
          color={typographyColorVariant[variant]}
        />
      )}
      <Typography
        variant={typographySizeVariant}
        color={typographyColorVariant[variant]}
      >
        {loading.indicator ? loading.text || title : title}
      </Typography>
    </TouchableOpacity>
  );
};

export default Button;
