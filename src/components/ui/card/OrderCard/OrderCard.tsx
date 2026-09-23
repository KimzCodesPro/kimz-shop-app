import { useTranslation } from "@/hooks";
import { Image } from "expo-image";
import { View } from "react-native";
import StatusBill from "../../feedback/StatusBill/StatusBill";
import Button from "../../inputs/Button/Button";
import { Typography } from "../../typography";
import { orderStatusColor, orderStatusLabel } from "./constants";
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
    <View style={[styles.container, style]}>
      <View style={styles.header}>
        <View>
          <Typography
            textTransform="capitalize"
            variant="xsmallRegular"
            color={colors.foreground.tertiary}
          >
            {t("myOrder_orderNumber")}
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
              {t(
                extraProductsCount === 1
                  ? "common_moreItem"
                  : "common_moreItems",
                { count: extraProductsCount },
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
          {t("myOrder_total")}
        </Typography>
        <Typography variant="mediumBold" color={colors.primary.base}>
          ${total}
        </Typography>
      </View>

      <View style={styles.actions}>
        <Button
          title={t("myOrder_details")}
          variant="ghost"
          size="sm"
          onPress={onDetailsPress}
          style={styles.action}
        />
        {status === "onProgress" && (
          <Button
            title={t("myOrder_tracking")}
            variant="primary"
            size="sm"
            onPress={onTrackingPress}
            style={styles.action}
          />
        )}
      </View>
    </View>
  );
};

export default OrderCard;
