import { Typography } from "@/components/ui/display";
import { TouchableOpacity } from "react-native";
import { SizeType, VariantType } from "./types";
import useStyle from "./useStyle";

type ButtonProps = {
  title: string;
  onPress: () => void;
  size?: SizeType;
  variant?: VariantType;
};

const Button = ({
  title,
  onPress,

  size = "lg",
  variant = "primary",
}: ButtonProps) => {
  const { styles, color } = useStyle(size, variant);

  const typographySizeVariant = size === "sm" ? "smallBold" : "normalBold";

  const typographyColorVariant = {
    primary: color.text.onPrimary,
    chip: color.primary.base,
    link: color.primary.base,
    ghost: color.text.primary,
    danger: color.danger.base,
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Typography
        variant={typographySizeVariant}
        color={typographyColorVariant[variant]}
      >
        {title}
      </Typography>
    </TouchableOpacity>
  );
};

export default Button;
