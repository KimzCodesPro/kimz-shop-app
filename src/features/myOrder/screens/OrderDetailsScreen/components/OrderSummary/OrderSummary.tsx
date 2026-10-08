import { CardWrapper } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { useTranslation } from "@/hooks";
import { View } from "react-native";
import { OrderSummaryProps } from "./types";
import useStyles from "./useStyles";

const OrderSummary = ({ summary, style }: OrderSummaryProps) => {
  const { styles, colors } = useStyles();
  const { t } = useTranslation();

  return (
    <CardWrapper style={style}>
      <View style={styles.info}>
        <Typography variant="smallRegular" color={colors.foreground.tertiary}>
          {t("orders_detailsSubtotal")}
        </Typography>
        <Typography variant="smallBold" color={colors.foreground.primary}>
          $ {summary.subtotal.toFixed(2)}
        </Typography>
      </View>
      <View style={styles.info}>
        <Typography variant="smallRegular" color={colors.foreground.tertiary}>
          {t("orders_detailsShippingFee")}
        </Typography>
        <Typography variant="smallBold" color={colors.foreground.primary}>
          $ {summary.shipping.toFixed(2)}
        </Typography>
      </View>
      <View style={styles.sum}>
        <Typography variant="smallBold" color={colors.foreground.primary}>
          {t("orders_detailsTotal")}
        </Typography>
        <Typography variant="largeBold" color={colors.primary.base}>
          $ {summary.total.toFixed(2)}
        </Typography>
      </View>
    </CardWrapper>
  );
};

export default OrderSummary;
