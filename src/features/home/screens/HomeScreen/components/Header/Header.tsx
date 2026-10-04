import { UserGreeting } from "@/components/ui/display";
import Icon from "@/src/components/icons";
import { Pressable, View } from "react-native";
import { FAVORITE_ICON_SIZE, NOTIFICATION_ICON_SIZE } from "./constants";
import { HeaderProps } from "./types";
import useStyles from "./useStyles";

const Header = ({
  userName,
  meta,
  imgSrc,
  unReadNotifications,
  onUserPress,
  onFavoritePress,
  onNotificationPress,
  style,
}: HeaderProps) => {
  const { styles, colors } = useStyles();
  return (
    <View style={[styles.container, style]}>
      <Pressable onPress={onUserPress}>
        <UserGreeting
          size="sm"
          userName={userName}
          meta={meta}
          imgSrc={imgSrc}
        />
      </Pressable>
      <View style={styles.iconContainer}>
        <Pressable onPress={onFavoritePress}>
          <Icon
            name="heart-filled"
            size={FAVORITE_ICON_SIZE}
            color={colors.foreground.primary}
          />
        </Pressable>
        <Pressable onPress={onNotificationPress}>
          {unReadNotifications && <View style={styles.notifcationIndicator} />}
          <Icon
            name="bell"
            size={NOTIFICATION_ICON_SIZE}
            color={colors.foreground.primary}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default Header;
