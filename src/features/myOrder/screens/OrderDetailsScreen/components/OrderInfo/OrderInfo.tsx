import { CardWrapper } from "@/src/components/ui/card";
import { StatusBill } from "@/src/components/ui/feedback";
import { Typography } from "@/src/components/ui/typography";
import {
  orderStatusColor,
  orderStatusLabel,
} from "@/src/features/myOrder/constant";
import { useTranslation } from "@/src/hooks";
import { View } from "react-native";
import { OrderInfoProps } from "./types";
import useStyles from "./useStyles";

const OrderInfo = ({ order, style }: OrderInfoProps) => {
  const { styles, colors } = useStyles();
  const { t } = useTranslation();

  return (
    <CardWrapper style={style}>
      <View style={styles.row}>
        <Typography variant="xsmallRegular" color={colors.foreground.tertiary}>
          {t("orders_detailsOrderNumber")}
        </Typography>
        <Typography variant="smallBold" color={colors.foreground.primary}>
          {order.orderNumber}
        </Typography>
      </View>

      <View style={styles.row}>
        <Typography variant="xsmallRegular" color={colors.foreground.tertiary}>
          {t("orders_detailsPlaced")}
        </Typography>
        <Typography variant="smallBold" color={colors.foreground.primary}>
          {order.placedAt}
        </Typography>
      </View>

      <View style={[styles.row, styles.lastRow]}>
        <Typography variant="xsmallRegular" color={colors.foreground.tertiary}>
          {t("orders_detailsStatus")}
        </Typography>
        <StatusBill
          color={orderStatusColor[order.status]}
          label={t(orderStatusLabel[order.status])}
        />
      </View>
    </CardWrapper>
  );
};

export default OrderInfo;
