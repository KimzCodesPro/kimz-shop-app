import Icon from "@/components/icons";
import { Pressable, View } from "react-native";
import { Typography } from "../../typography";
import RowNavTrailing from "./RowNavTrailing";
import { RowNavProps } from "./types";
import useStyles from "./useStyles";

const RowNav = ({
  variant = "default",
  title,
  icon,
  style,
  onPress,
  ...trailingProps
}: RowNavProps) => {
  const { styles, itemColor } = useStyles(variant);

  return (
    <Pressable style={[styles.container, style]} onPress={onPress}>
      <View style={styles.mainInfo}>
        <Icon name={icon} color={itemColor} />
        <Typography variant="smallBold" color={itemColor}>
          {title}
        </Typography>
      </View>
      <RowNavTrailing {...trailingProps} />
    </Pressable>
  );
};

export default RowNav;
