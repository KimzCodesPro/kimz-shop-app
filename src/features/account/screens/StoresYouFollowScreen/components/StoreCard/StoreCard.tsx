import { productPlaceholder } from "@/assets/images";
import { CardWrapper } from "@/components/ui/card";
import { Button } from "@/components/ui/inputs";
import { Typography } from "@/components/ui/typography";
import { useTranslation } from "@/hooks";
import { Image } from "expo-image";
import { View } from "react-native";
import { StoreCardProps } from "./types";
import useStyles from "./useStyles";

const StoreCard = ({
  name,
  imgSrc,
  followerNumber,
  removeFollowing,
  style,
}: StoreCardProps) => {
  const { t } = useTranslation();
  const { styles, colors } = useStyles();

  return (
    <CardWrapper style={[styles.container, style]}>
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
        <Typography variant="xsmallRegular" color={colors.foreground.tertiary}>
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
  );
};

export default StoreCard;
