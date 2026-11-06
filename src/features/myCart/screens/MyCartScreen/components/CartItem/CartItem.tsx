import { productPlaceholder } from "@/assets/images";
import { CheckBox, QuantityStepper } from "@/components/ui/inputs";
import { Typography } from "@/components/ui/typography";
import { Image } from "expo-image";
import { Pressable, View } from "react-native";
import type { CartItemProps } from "./types";
import useStyles from "./useStyles";

const CartItem = ({
  image,
  product,
  color,
  price,
  selected,
  onToggleSelect,
}: CartItemProps) => {
  const { styles, colors } = useStyles();

  return (
    <Pressable style={styles.container} onPress={onToggleSelect}>
      <CheckBox isChecked={selected} />
      <Image
        source={image}
        placeholder={productPlaceholder}
        placeholderContentFit="cover"
        contentFit="cover"
        style={styles.productImage}
        transition={1000}
      />
      <View style={styles.detailsContainer}>
        <Typography variant="normalBold" color={colors.foreground.primary}>
          {product}
        </Typography>
        <View style={styles.detailsContainerColor}>
          <Typography variant="normalLight" color={colors.foreground.primary}>
            Color:
          </Typography>
          <Typography variant="normalLight" color={colors.foreground.secondary}>
            {color}
          </Typography>
        </View>
        <View style={styles.detailsContainerQuantity}>
          <QuantityStepper />
          <Typography variant="mediumBold" color={colors.foreground.primary}>
            $ {price}
          </Typography>
        </View>
      </View>
    </Pressable>
  );
};

export default CartItem;
