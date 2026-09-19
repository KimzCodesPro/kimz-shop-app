import { productPlaceholder } from "@/assets/images";
import { Typography } from "@/components/ui/typography";
import { Image } from "expo-image";
import { Pressable, View } from "react-native";
import { PromoBannerCardProps } from "./types";
import { useTranslation } from "@/src/hooks/";
import useStyles from "./useStyles";

const PromoBannerCard = ({
  title,
  shopLabel,
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
        >
          {title}
        </Typography>
        <Typography variant="smallRegular" color={colors.foreground.secondary}>
          {t("common_by")} {shopLabel}
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
