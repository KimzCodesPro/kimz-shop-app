import { View, Pressable } from "react-native";
import { UserGreeting } from "@/components/ui/display";
import Icon from "@/src/components/icons";
import useStyles from "./useStyles";
import { HeaderProps } from "./types";

const Favorite_ICON_SIZE = 22;
const Notification_ICON_SIZE = 22;

const Header = ({
  userName,
  meta,
  imgSrc,
  unReadNotifications,
}: HeaderProps) => {
  const { styles, colors } = useStyles();
  return (
    <View style={styles.container}>
      <UserGreeting size="sm" userName={userName} meta={meta} imgSrc={imgSrc} />
      <View style={styles.iconContainer}>
        <Pressable>
          <Icon
            name="heart-filled"
            size={Favorite_ICON_SIZE}
            color={colors.foreground.primary}
          />
        </Pressable>
        <Pressable>
          {unReadNotifications && <View style={styles.notifcationIndicator} />}
          <Icon
            name="bell"
            size={Notification_ICON_SIZE}
            color={colors.foreground.primary}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default Header;
