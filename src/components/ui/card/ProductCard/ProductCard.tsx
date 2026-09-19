import Icon from "@/components/icons";
import { productPlaceholder } from "@/assets/images";
import { Image } from "expo-image";
import { Pressable, View } from "react-native";
import { Typography } from "../../typography";
import { ProductCardProps } from "./types";
import useStyles from "./useStyles";

const ProductCard = ({
  productName,
  price,
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
        <Pressable
          onPress={onToggleFavorite}
          style={styles.headerFavoriteButton}
        >
          <Icon
            size={18}
            name={isFavorite ? "heart-filled" : "heart"}
            color={isFavorite ? colors.danger.base : colors.foreground.tertiary}
          />
        </Pressable>
      </View>
      <View style={styles.body}>
        <Typography
          textTransform="capitalize"
          variant="smallBold"
          color={colors.foreground.primary}
        >
          {productName}
        </Typography>
        <Typography
          textTransform="capitalize"
          variant="xsmallRegular"
          color={colors.foreground.tertiary}
        >
          {brand}
        </Typography>
        <Typography
          textTransform="capitalize"
          variant="smallBold"
          color={colors.foreground.primary}
        >
          ${price}
        </Typography>
      </View>
    </Pressable>
  );
};

export default ProductCard;
