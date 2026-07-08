import { avatar } from "@/assets/images";
import Icon from "@/components/icons";
import { Image, ImageProps } from "expo-image";
import { StyleProp, View, ViewStyle } from "react-native";
import useStyles from "./useStyles";

type AvatarBaseProps = {
  style?: StyleProp<ViewStyle>;
  source?: ImageProps["source"];
};
type AvatarProps = AvatarBaseProps &
  (
    | { size?: "sm" | "md"; enableUploader?: never }
    | { size?: "lg"; enableUploader?: boolean }
  );

const Avatar = ({
  style,
  size = "lg",
  enableUploader = false,
  source,
}: AvatarProps) => {
  const { styles, colors } = useStyles(size);
  const renderImage = source || avatar;
  return (
    <View style={[styles.container, style]}>
      <Image
        placeholder={avatar}
        placeholderContentFit="cover"
        style={styles.avatar}
        source={renderImage}
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
