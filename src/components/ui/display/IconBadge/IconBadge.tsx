import Icon, { IconName } from "@/components/icons";
import { StatusVariant } from "@/types/";
import { StyleProp, View, ViewStyle } from "react-native";
import useStyles from "./useStyles";

type IconBadgeProps = {
  iconName: IconName;
  color: StatusVariant;
  style?: StyleProp<ViewStyle>;
};

const IconBadge = ({ style, iconName, color = "info" }: IconBadgeProps) => {
  const { styles, colors } = useStyles();

  const iconColors = {
    success: colors.success.strong,
    warning: colors.warning.base,
    info: colors.primary.pressed,
    danger: colors.danger.strong,
  };
  return (
    <View style={[styles.container, style]}>
      <Icon name={iconName} size={22} color={iconColors[color]} />
    </View>
  );
};

export default IconBadge;
