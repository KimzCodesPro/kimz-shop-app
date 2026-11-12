import { useTranslation } from "@/hooks";
import { Image } from "expo-image";
import { View } from "react-native";
import Typography from "../../typography/Typography/Typography";
import CardWrapper from "../CardWrapper/CardWrapper";
import { ProductLineItemCardProps } from "./types";
import useStyles from "./useStyles";

const ProductLineItemCard = ({ item, style }: ProductLineItemCardProps) => {
  const { styles, colors } = useStyles();
  const { t } = useTranslation();

  return (
    <CardWrapper style={[styles.container, style]}>
      <Image source={item.image} style={styles.image} />

      <View style={styles.info}>
        <Typography
          variant="smallBold"
          numberOfLines={1}
          color={colors.foreground.primary}
        >
          {item.title}
        </Typography>

        <View style={styles.meta}>
          <Typography
            variant="xsmallRegular"
            color={colors.foreground.tertiary}
          >
            {t("common_color")}: {item.color}
          </Typography>
          <Typography
            variant="xsmallRegular"
            color={colors.foreground.tertiary}
          >
            {" . "}
          </Typography>
          <Typography
            variant="xsmallRegular"
            color={colors.foreground.tertiary}
          >
            {t("common_qty")}: {item.quantity}
          </Typography>
        </View>
      </View>
      <Typography
        variant="smallBold"
        color={colors.foreground.primary}
        style={styles.price}
      >
        $ {item.price.toFixed(2)}
      </Typography>
    </CardWrapper>
  );
};

export default ProductLineItemCard;
