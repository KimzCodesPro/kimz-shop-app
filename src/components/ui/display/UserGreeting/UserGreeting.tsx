import { View } from "react-native";
import Typography from "../../typography/Typography/Typography";
import Avatar from "../Avatar/Avatar";
import { UserGreetingProps } from "./types";
import useStyles from "./useStyles";

const UserGreeting = ({
  size,
  imgSrc,
  userName,
  meta,
  style,
}: UserGreetingProps) => {
  const { styles, typography } = useStyles(size);

  const avatarSize = size === "lg" ? "md" : "sm";

  return (
    <View style={[styles.container, style]}>
      <Avatar imgSrc={imgSrc} size={avatarSize} />
      <View style={styles.textContainer}>
        <Typography
          variant={typography.userName.font}
          color={typography.userName.color}
          forceLanguage="en"
        >
          {userName}
        </Typography>
        <Typography
          variant={typography.meta.font}
          color={typography.meta.color}
          forceLanguage="en"
        >
          {meta}
        </Typography>
      </View>
    </View>
  );
};

export default UserGreeting;
