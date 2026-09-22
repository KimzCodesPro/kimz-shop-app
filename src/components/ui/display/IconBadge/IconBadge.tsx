import Icon from "@/components/icons";
import { View } from "react-native";
import { iconBadgeColor } from "./constants";
import { IconBadgeProps } from "./types";
import useStyles from "./useStyles";

const IconBadge = ({ icon, variant = "info", style }: IconBadgeProps) => {
  const { styles, colors } = useStyles();

  const iconColors = iconBadgeColor(colors);

  return (
    <View style={[styles.container, style]}>
      <Icon name={icon} size={22} color={iconColors[variant]} />
    </View>
  );
};

export default IconBadge;
