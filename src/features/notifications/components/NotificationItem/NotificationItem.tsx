import Icon from "@/src/components/icons";
import { Typography } from "@/src/components/ui/typography";
import { View } from "react-native";
import { notificationIcon } from "./constants";
import useStyles from "./useStyles";

import type { NotificationItemProps } from "./types";

const NotificationItem = ({
  type,
  title,
  description,
  timeAgo,
}: NotificationItemProps) => {
  const { styles, colors } = useStyles();

  return (
    <View style={styles.container}>
      <View style={styles.iconWrapper}>
        <Icon
          name={notificationIcon[type]}
          size={24}
          color={colors.foreground.secondary}
        />
      </View>
      <View style={styles.content}>
        <View style={styles.header}>
          <Typography
            textTransform="capitalize"
            variant="normalBold"
            color={colors.foreground.primary}
          >
            {title}
          </Typography>
          <Typography
            textTransform="lowercase"
            variant="xsmallRegular"
            color={colors.foreground.tertiary}
          >
            {timeAgo}
          </Typography>
        </View>
        <View style={styles.description}>
          <Typography variant="smallRegular" color={colors.foreground.tertiary}>
            {description}
          </Typography>
        </View>
      </View>
    </View>
  );
};

export default NotificationItem;
