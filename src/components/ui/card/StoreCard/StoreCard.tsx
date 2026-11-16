import { productPlaceholder } from "@/assets/images";
import { useTranslation } from "@/hooks";
import { Image } from "expo-image";
import { Pressable, View } from "react-native";
import Button from "../../inputs/Button/Button";
import Typography from "../../typography/Typography/Typography";
import CardWrapper from "../CardWrapper/CardWrapper";
import { StoreCardProps } from "./types";
import useStyles from "./useStyles";

const StoreCard = ({
  name,
  imgSrc,
  followerNumber,
  removeFollowing,
  onPress,
  style,
}: StoreCardProps) => {
  const { t } = useTranslation();
  const { styles, colors } = useStyles();

  return (
    // style goes on the Pressable so outside spacing (margins) still applies
    <Pressable onPress={onPress} style={style}>
      <CardWrapper style={styles.container}>
        {/* store image */}
        <Image
          source={imgSrc}
          placeholder={productPlaceholder}
          placeholderContentFit="cover"
          contentFit="cover"
          style={styles.image}
          transition={1000}
        />
        {/* store info */}
        <View style={styles.info}>
          <Typography
            variant="smallBold"
            color={colors.foreground.primary}
            numberOfLines={1}
          >
            {name}
          </Typography>
          <Typography
            variant="xsmallRegular"
            color={colors.foreground.tertiary}
          >
            {t("stores_followersCount", { count: followerNumber })}
          </Typography>
        </View>
        {/* unfollow */}
        <Button
          style={styles.button}
          size="sm"
          variant="chip"
          title={t("stores_followingButton")}
          onPress={removeFollowing}
        />
      </CardWrapper>
    </Pressable>
  );
};

export default StoreCard;
