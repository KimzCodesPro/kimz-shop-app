import Icon from "@/components/icons";
import { View } from "react-native";
import { IconBadgeProps } from "./types";
import useStyles from "./useStyles";

const IconBadge = ({ icon, variant = "info", style }: IconBadgeProps) => {
  const { styles, iconColors } = useStyles();

  return (
    <View style={[styles.container, style]}>
      <Icon name={icon} color={iconColors[variant]} strokeWidth={2} />
    </View>
  );
};

export default IconBadge;
