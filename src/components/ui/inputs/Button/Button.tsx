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
  const { indicator: isLoading, text: loadingText } = loading;

  const isDisabled = disabled || isLoading;

  const { styles, typographyColor } = useStyles(size, variant, isDisabled);

  const typographySizeVariant = size === "sm" ? "smallBold" : "normalBold";

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, style]}
      disabled={isDisabled}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color={typographyColor} />
      ) : (
        icon && <Icon name={icon} size={20} color={typographyColor} />
      )}
      <Typography variant={typographySizeVariant} color={typographyColor}>
        {(isLoading && loadingText) || title}
      </Typography>
    </TouchableOpacity>
  );
};

export default Button;
