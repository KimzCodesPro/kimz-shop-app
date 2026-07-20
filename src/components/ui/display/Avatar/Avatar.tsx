import { avatar, person } from "@/assets/images";
import Icon from "@/components/icons";
import { Image } from "expo-image";
import { View } from "react-native";
import { AvatarProps } from "./types";
import useStyles from "./useStyles";

const Avatar = ({ size = "lg", enableUploader = false }: AvatarProps) => {
  const { styles, colors } = useStyles(size);

  return (
    <View style={styles.container}>
      <Image
        placeholder={avatar}
        placeholderContentFit="cover"
        style={styles.avatar}
        source={person}
        contentFit="cover"
        transition={1000}
      />
      {enableUploader && size === "lg" && (
        <View style={styles.uploaderRing}>
          <View style={styles.uploader}>
            <Icon name="camera" size={20} color={colors.foreground.contrast} />
          </View>
        </View>
      )}
    </View>
  );
};

export default Avatar;
