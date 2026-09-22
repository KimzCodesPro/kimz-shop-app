import Icon from "@/components/icons";
import { View } from "react-native";
import { IconBadgeProps } from "./types";
import useStyles from "./useStyles";

const IconBadge = ({ icon, variant = "info", style }: IconBadgeProps) => {
  const { styles, colors } = useStyles();

  const iconColors = {
    success: colors.success.strong,
    warning: colors.warning.base,
    info: colors.primary.pressed,
    danger: colors.danger.base,
  };
  return (
    <View style={[styles.container, style]}>
      <Icon name={icon} size={22} color={iconColors[variant]} />
    </View>
  );
};

export default IconBadge;
