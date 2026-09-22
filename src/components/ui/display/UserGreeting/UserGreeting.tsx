import { View } from "react-native";
import Avatar from "../Avatar/Avatar";
import Typography from "../../typography/Typography/Typography";
import { UserGreetingProps } from "./types";
import useStyles from "./useStyles";

const UserGreeting = ({
  size,
  imgSrc,
  userName,
  meta,
  style,
}: UserGreetingProps) => {
  const { styles, typographyMapping } = useStyles();

  const avatarSize = size === "lg" ? "md" : "sm";

  return (
    <View style={[styles.container, style]}>
      <Avatar imgSrc={imgSrc} size={avatarSize} />
      <View style={styles.textContainer}>
        <Typography
          variant={typographyMapping[size].userName.font}
          color={typographyMapping[size].userName.color}
          forceLanguage="en"
        >
          {userName}
        </Typography>
        <Typography
          variant={typographyMapping[size].meta.font}
          color={typographyMapping[size].meta.color}
          forceLanguage="en"
        >
          {meta}
        </Typography>
      </View>
    </View>
  );
};

export default UserGreeting;
