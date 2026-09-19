import { categoryPlaceholder } from "@/assets/images";
import { Image } from "expo-image";
import { Pressable, View } from "react-native";
import { Typography } from "../../typography";
import { CategoryCardProps } from "./types";
import useStyles from "./useStyles";

const CategoryCard = ({
  categoryName,
  productsCount,
  imgSrc,
  onPress,
  style,
}: CategoryCardProps) => {
  const { styles, colors } = useStyles();

  return (
    <Pressable onPress={onPress} style={[styles.container, style]}>
      <View style={styles.body}>
        <Typography
          textTransform="capitalize"
          variant="normalBold"
          color={colors.foreground.primary}
        >
          {categoryName}
        </Typography>
        <Typography variant="xsmallRegular" color={colors.foreground.primary}>
          {productsCount} {productsCount === 1 ? "Product" : "Products"}
        </Typography>
      </View>
      <Image
        placeholder={categoryPlaceholder}
        placeholderContentFit="cover"
        contentFit="cover"
        source={imgSrc}
        style={styles.img}
      />
    </Pressable>
  );
};

export default CategoryCard;
