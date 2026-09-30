import { CardWrapper } from "@/src/components/ui/card";
import { Typography } from "@/src/components/ui/typography";
import { useTranslation } from "@/src/hooks";
import { Image } from "expo-image";
import { View } from "react-native";
import { ItemProps } from "./types";
import useStyles from "./useStyles";

const Item = ({ item, style }: ItemProps) => {
  const { styles, colors } = useStyles();
  const { t } = useTranslation();

  return (
    <CardWrapper style={[styles.container, style]}>
      <Image source={item.image} style={styles.image} />

      <View style={styles.info}>
        <Typography
          variant="smallBold"
          numberOfLines={2}
          color={colors.foreground.primary}
        >
          {item.title}
        </Typography>

        <View style={styles.meta}>
          <Typography
            variant="xsmallRegular"
            color={colors.foreground.tertiary}
          >
            {t("orders_color")}: {item.color}
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
            {t("orders_qty")}: {item.quantity}
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

export default Item;
