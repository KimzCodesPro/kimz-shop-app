import { View, Pressable } from "react-native";
import { UserGreeting } from "@/components/ui/display";
import Icon from "@/src/components/icons";
import useStyles from "./useStyles";
import { HeaderProps } from "./types";
import { FAVORITE_ICON_SIZE, NOTIFICATION_ICON_SIZE } from "./constants";

const Header = ({
  userName,
  meta,
  imgSrc,
  unReadNotifications,
  onUserPress,
  onFavoritePress,
  onNotificationPress,
}: HeaderProps) => {
  const { styles, colors } = useStyles();
  return (
    <View style={styles.container}>
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
