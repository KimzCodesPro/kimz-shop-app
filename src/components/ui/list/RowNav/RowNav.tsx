import Icon from "@/components/icons";
import { Pressable, View } from "react-native";
import { Typography } from "../../typography";
import RowNavTrailing from "./RowNavTrailing";
import { LEADING_ICON_SIZE } from "./constants";
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
  const { styles, rowNavItemColor } = useStyles();

  return (
    <Pressable style={[styles.container, style]} onPress={onPress}>
      <View style={styles.mainInfo}>
        <Icon
          name={icon}
          size={LEADING_ICON_SIZE}
          color={rowNavItemColor[variant]}
        />
        <Typography variant="smallBold" color={rowNavItemColor[variant]}>
          {title}
        </Typography>
      </View>
      <RowNavTrailing {...trailingProps} />
    </Pressable>
  );
};

export default RowNav;
