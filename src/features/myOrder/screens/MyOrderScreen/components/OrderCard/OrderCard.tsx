import { StatusBill } from "@/components/ui/feedback";
import { Button } from "@/components/ui/inputs";
import { Typography } from "@/components/ui/typography";
import { useTranslation } from "@/hooks";
import { CardWrapper } from "@/components/ui/card";
import {
  orderStatusColor,
  orderStatusLabel,
} from "@/features/myOrder/constant";
import { Image } from "expo-image";
import { View } from "react-native";
import { OrderCardProps } from "./types";
import useStyles from "./useStyles";

const OrderCard = ({
  orderNumber,
  products,
  total,
  status,
  onDetailsPress,
  onTrackingPress,
  style,
}: OrderCardProps) => {
  const { t } = useTranslation();
  const { styles, colors } = useStyles();

  const extraProductsCount = products.length - 1;

  return (
    <CardWrapper style={[styles.container, style]}>
      <View style={styles.header}>
        <View>
          <Typography
            textTransform="capitalize"
            variant="xsmallRegular"
            color={colors.foreground.tertiary}
          >
            {t("orders_detailsOrderNumber")}
          </Typography>
          <Typography
            textTransform="uppercase"
            variant="smallBold"
            color={colors.foreground.primary}
          >
            {orderNumber}
          </Typography>
        </View>
        <StatusBill
          variant="outlined"
          label={t(orderStatusLabel[status])}
          color={orderStatusColor[status]}
        />
      </View>

      <View style={styles.productsInfo}>
        <View style={styles.productInfoTitle}>
          <Typography
            variant="smallBold"
            numberOfLines={1}
            color={colors.foreground.primary}
          >
            {products[0].title}
          </Typography>
          {extraProductsCount > 0 && (
            <Typography
              variant="xsmallRegular"
              color={colors.foreground.tertiary}
            >
              +{extraProductsCount}{" "}
              {t(
                extraProductsCount === 1
                  ? "orders_oneItem"
                  : "orders_moreItems",
              )}
            </Typography>
          )}
        </View>
        <View style={styles.productInfoImages}>
          {products.map((product) => (
            <Image
              key={product.id}
              source={product.imgSrc}
              contentFit="fill"
              style={styles.productImage}
            />
          ))}
        </View>
      </View>

      <View style={styles.total}>
        <Typography variant="xsmallRegular" color={colors.foreground.tertiary}>
          {t("orders_detailsTotal")}
        </Typography>
        <Typography variant="mediumBold" color={colors.primary.base}>
          ${total}
        </Typography>
      </View>

      <View style={styles.actions}>
        <Button
          title={t("orders_detailButton")}
          variant="ghost"
          size="sm"
          onPress={onDetailsPress}
          style={styles.action}
        />
        {status === "onProgress" && (
          <Button
            title={t("orders_trackingButton")}
            variant="primary"
            size="sm"
            onPress={onTrackingPress}
            style={styles.action}
          />
        )}
      </View>
    </CardWrapper>
  );
};

export default OrderCard;
