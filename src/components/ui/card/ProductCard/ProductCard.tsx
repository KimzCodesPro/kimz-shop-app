import { productPlaceholder } from "@/assets/images";
import Icon from "@/components/icons";
import { Image } from "expo-image";
import { Pressable, View } from "react-native";
import { Typography } from "../../typography";
import { FAVORITE_ICON_SIZE } from "./constants";
import calculateDiscountPercentage from "./helpers";
import { ProductCardProps } from "./types";
import useStyles from "./useStyles";

const ProductCard = ({
  productName,
  price,
  discountPrice,
  brand,
  imgSrc,
  isFavorite,
  onToggleFavorite,
  onPress,
  style,
}: ProductCardProps) => {
  const { styles, colors } = useStyles();

  return (
    <Pressable onPress={onPress} style={[styles.container, style]}>
      <View style={styles.header}>
        <Image
          source={imgSrc}
          placeholder={productPlaceholder}
          placeholderContentFit="cover"
          contentFit="cover"
          style={styles.headerProductImage}
          transition={1000}
        />
        {discountPrice && (
          <View style={styles.headerDiscountBadge}>
            <Typography variant="xsmallBold" color={colors.foreground.contrast}>
              {calculateDiscountPercentage(price, discountPrice)}
            </Typography>
          </View>
        )}
        <Pressable
          onPress={onToggleFavorite}
          style={styles.headerFavoriteButton}
        >
          <Icon
            size={FAVORITE_ICON_SIZE}
            name={isFavorite ? "heart-filled" : "heart"}
            color={isFavorite ? colors.danger.base : colors.foreground.tertiary}
          />
        </Pressable>
      </View>
      <View style={styles.info}>
        <Typography
          textTransform="capitalize"
          variant="smallBold"
          color={colors.foreground.primary}
          numberOfLines={1}
        >
          {productName}
        </Typography>
        <Typography
          textTransform="capitalize"
          variant="xsmallRegular"
          color={colors.foreground.tertiary}
          numberOfLines={1}
        >
          {brand}
        </Typography>
        <View style={styles.priceContainer}>
          <Typography
            textTransform="capitalize"
            variant="smallBold"
            color={colors.foreground.primary}
          >
            ${discountPrice ? discountPrice : price}
          </Typography>
          {discountPrice && (
            <Typography
              textDecorationLine="line-through"
              textTransform="capitalize"
              variant="xsmallRegular"
              color={colors.foreground.tertiary}
            >
              ${price}
            </Typography>
          )}
        </View>
      </View>
    </Pressable>
  );
};

export default ProductCard;
