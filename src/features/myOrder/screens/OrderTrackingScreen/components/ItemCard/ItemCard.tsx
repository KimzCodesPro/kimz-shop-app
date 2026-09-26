import { productSample } from "@/assets/images";
import { Typography } from "@/components/ui/typography";
import { Image } from "expo-image";
import { View } from "react-native";
import type { ItemCardProps } from "./types";
import useStyles from "./useStyles";

const ItemCard = ({ style }: ItemCardProps) => {
  const { styles, colors } = useStyles();

  return (
    <View style={[styles.container, style]}>
      <Image source={productSample} style={styles.image} />

      <View style={styles.info}>
        <Typography
          variant="smallBold"
          textTransform="capitalize"
          color={colors.foreground.primary}
        >
          Bix Bag Limited Edition 229
        </Typography>
        <Typography
          variant="xsmallRegular"
          textTransform="capitalize"
          color={colors.foreground.tertiary}
        >
          Linar 1883
        </Typography>
        <Typography
          variant="xsmallRegular"
          textTransform="capitalize"
          color={colors.foreground.tertiary}
        >
          Tracking # DHL-9847-2018
        </Typography>
      </View>
    </View>
  );
};

export default ItemCard;
