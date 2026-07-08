import { ImageProps } from "expo-image";
import { View } from "react-native";
import Avatar from "../Avatar/Avatar";
import Typography from "../Typography/Typography";
import useStyles from "./useStyles";

type UserGreetingProps = {
  avatarSource: ImageProps["source"];
};

const UserGreeting = ({ avatarSource }: UserGreetingProps) => {
  const { styles, colors } = useStyles();
  return (
    <View style={styles.container}>
      <Avatar size="md" source={avatarSource} />
      <View>
        <Typography variant="normalBold" color={colors.foreground.primary}>
          Hi Johanese
        </Typography>
        <Typography variant="smallRegular" color={colors.foreground.secondary}>
          lets go shoping
        </Typography>
      </View>
    </View>
  );
};

export default UserGreeting;
