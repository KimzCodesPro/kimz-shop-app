import { AddressCard, PaymentCard } from "@/components/ui/card";
import { Divider, ScreenLayout, SectionTitle } from "@/components/ui/layout";
import { TopBar } from "@/components/ui/navigations";
import { Typography } from "@/components/ui/typography";
import { useTheme, useTranslation } from "@/hooks";
import { View } from "react-native";
import styles from "./checkoutScreenStyles";
import { OrderSummaryList } from "./components";
import { CHECKOUT_ADDRESS, CHECKOUT_ITEMS, CHECKOUT_PAYMENT } from "./data";

const CheckoutScreen = () => {
  const { t } = useTranslation();
  const colors = useTheme();

  return (
    <ScreenLayout
      scrollable
      renderTopBar={() => <TopBar title={t("checkout_title")} goBack />}
    >
      <View style={styles.content}>
        {/* shipping address */}
        <View style={styles.section}>
          <SectionTitle
            title={t("checkout_shippingAddress")}
            actionText={t("checkout_change")}
            onActionPress={() => {}}
          />
          <AddressCard
            city={CHECKOUT_ADDRESS.city}
            address={CHECKOUT_ADDRESS.address}
            type={CHECKOUT_ADDRESS.type}
          />
        </View>

        {/* payment method */}
        <View style={styles.section}>
          <SectionTitle
            title={t("checkout_paymentMethod")}
            actionText={t("checkout_change")}
            onActionPress={() => {}}
          />
          <PaymentCard
            cardNumber={CHECKOUT_PAYMENT.cardNumber}
            cardType={CHECKOUT_PAYMENT.cardType}
            expiryDate={CHECKOUT_PAYMENT.expiryDate}
            isDefault={CHECKOUT_PAYMENT.isDefault}
          />
        </View>
        {/* order items */}
        <View style={styles.section}>
          <SectionTitle title={t("checkout_orderSummary")} />
          <OrderSummaryList items={CHECKOUT_ITEMS} />
        </View>
        <View style={styles.totalInfo}>
          <Divider space="none" />
          <View style={styles.totalInfoRow}>
            <Typography
              variant="normalRegular"
              color={colors.foreground.tertiary}
            >
              {t("checkout_subtotal")}
            </Typography>
            <Typography variant="normalBold" color={colors.foreground.primary}>
              {`$${(400).toFixed(2)}`}
            </Typography>
          </View>
          <View style={styles.totalInfoRow}>
            <Typography
              variant="normalRegular"
              color={colors.foreground.tertiary}
            >
              {t("checkout_shipping")}
            </Typography>
            <Typography variant="normalBold" color={colors.foreground.primary}>
              {`$${(8).toFixed(2)}`}
            </Typography>
          </View>
          <View style={styles.totalInfoRow}>
            <Typography
              variant="normalRegular"
              color={colors.foreground.tertiary}
            >
              {t("checkout_tax")}
            </Typography>
            <Typography variant="normalBold" color={colors.foreground.primary}>
              {`$${(26.58).toFixed(2)}`}
            </Typography>
          </View>
          <Divider />
          <View style={styles.totalInfoRow}>
            <Typography variant="mediumBold" color={colors.foreground.tertiary}>
              {t("checkout_total")}
            </Typography>
            <Typography variant="largeBold" color={colors.primary.base}>
              {`$${(477).toFixed(2)}`}
            </Typography>
          </View>
        </View>
      </View>
    </ScreenLayout>
  );
};

export default CheckoutScreen;
