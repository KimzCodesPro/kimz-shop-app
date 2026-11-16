import { Button, QuantityStepper } from "@/components/ui/inputs";
import { Divider } from "@/components/ui/layout";
import { Typography } from "@/components/ui/typography";
import { useTranslation } from "@/hooks";
import { View } from "react-native";
import { StickyFooterProps } from "./types";
import useStyles from "./useStyles";

const StickyFooter = ({
  quantity,
  onQuantityChange,
  unitPrice,
  totalPrice,
  onAddToCart,
  style,
}: StickyFooterProps) => {
  const { t } = useTranslation();
  const { styles, colors } = useStyles();

  return (
    <View style={[styles.container, style]}>
      <Divider />
      <View style={styles.content}>
        {/* "Choose amount :" + quantity stepper */}
        <View style={styles.amountRow}>
          <Typography variant="normalBold" color={colors.foreground.primary}>
            {t("itemDetails_chooseAmount")}
          </Typography>
          <QuantityStepper
            startQuantity={quantity}
            currentQuantity={onQuantityChange}
          />
        </View>
        {/* total + add to cart */}
        <View style={styles.checkoutRow}>
          <View style={styles.total}>
            {/* "Total ($149.00 × 3)" */}
            <Typography
              variant="smallRegular"
              color={colors.foreground.tertiary}
            >
              {`${t("itemDetails_total")} ($${unitPrice.toFixed(2)} × ${quantity})`}
            </Typography>
            <Typography variant="largeBold" color={colors.foreground.primary}>
              {`$ ${totalPrice.toFixed(2)}`}
            </Typography>
          </View>
          <Button
            title={t("itemDetails_addToCartButton")}
            icon="shopping-cart"
            onPress={onAddToCart}
            style={styles.addToCartButton}
          />
        </View>
      </View>
    </View>
  );
};

export default StickyFooter;
