import { productPlaceholder } from "@/assets/images";
import { Typography } from "@/components/ui/typography";
import { useTranslation } from "@/hooks/";
import { Image } from "expo-image";
import { Pressable, View } from "react-native";
import { PromoBannerCardProps } from "./types";
import useStyles from "./useStyles";

const PromoBannerCard = ({
  title,
  shopName,
  imgSrc,
  onPress,
  style,
}: PromoBannerCardProps) => {
  const { t } = useTranslation();
  const { styles, colors } = useStyles();

  return (
    <Pressable onPress={onPress} style={[styles.container, style]}>
      <View style={styles.body}>
        <Typography
          textTransform="capitalize"
          variant="normalBold"
          color={colors.foreground.primary}
          numberOfLines={2}
        >
          {title}
        </Typography>
        <Typography
          variant="smallRegular"
          color={colors.foreground.secondary}
          numberOfLines={1}
        >
          {t("common_by")} {shopName}
        </Typography>
      </View>
      <Image
        placeholder={productPlaceholder}
        placeholderContentFit="cover"
        contentFit="cover"
        source={imgSrc}
        style={styles.img}
      />
    </Pressable>
  );
};

export default PromoBannerCard;
