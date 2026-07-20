import Icon from "@/components/icons";
import { View } from "react-native";
import { IconBadgeProps } from "./types";
import useStyles from "./useStyles";

const IconBadge = ({ iconName, color = "info" }: IconBadgeProps) => {
  const { styles, colors } = useStyles();

  const iconColors = {
    success: colors.success.strong,
    warning: colors.warning.base,
    info: colors.primary.pressed,
    danger: colors.danger.strong,
  };
  return (
    <View style={styles.container}>
      <Icon name={iconName} size={22} color={iconColors[color]} />
    </View>
  );
};

export default IconBadge;
