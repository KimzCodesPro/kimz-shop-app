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

const OrderInfo = ({ style }: OrderInfoProps) => {
  const { styles, colors } = useStyles();
  const { t } = useTranslation();

  return (
    <CardWrapper style={[styles.container, style]}>
      <View style={styles.row}>
        <Typography variant="xsmallRegular" color={colors.foreground.tertiary}>
          {t("orders_detailsOrderNumber")}
        </Typography>
        <Typography variant="smallBold" color={colors.foreground.primary}>
          #KMZ-2024-0142
        </Typography>
      </View>

      <View style={styles.row}>
        <Typography variant="xsmallRegular" color={colors.foreground.tertiary}>
          {t("orders_detailsOrderNumber")}
        </Typography>
        <Typography variant="smallBold" color={colors.foreground.primary}>
          May 15, 2024
        </Typography>
      </View>

      <View style={[styles.row, styles.lastRow]}>
        <Typography variant="xsmallRegular" color={colors.foreground.tertiary}>
          {t("orders_detailsStatus")}
        </Typography>
        <StatusBill
          color={orderStatusColor.onProgress}
          label={t(orderStatusLabel.onProgress)}
        />
      </View>
    </CardWrapper>
  );
};

export default OrderInfo;
