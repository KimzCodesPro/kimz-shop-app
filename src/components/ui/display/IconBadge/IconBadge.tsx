import Icon from "@/components/icons";
import { View } from "react-native";
import { BADGE_ICON_SIZE, iconBadgeColor } from "./constants";
import { IconBadgeProps } from "./types";
import useStyles from "./useStyles";

const IconBadge = ({ icon, variant = "info", style }: IconBadgeProps) => {
  const { styles, colors } = useStyles();

  const iconColors = iconBadgeColor(colors);

  return (
    <View style={[styles.container, style]}>
      <Icon name={icon} size={BADGE_ICON_SIZE} color={iconColors[variant]} />
    </View>
  );
};

export default IconBadge;
