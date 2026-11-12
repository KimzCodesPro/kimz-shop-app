import { AddressCard, PaymentCard } from "@/components/ui/card";
import { ScreenLayout } from "@/components/ui/layout";
import { TopBar } from "@/components/ui/navigations";
import { useTranslation } from "@/hooks";
import { View } from "react-native";
import styles from "./checkoutScreenStyles";
import { OrderSummaryList } from "./components";
import { CHECKOUT_ADDRESS, CHECKOUT_ITEMS, CHECKOUT_PAYMENT } from "./data";

const CheckoutScreen = () => {
  const { t } = useTranslation();

  return (
    <ScreenLayout
      scrollable
      renderTopBar={() => <TopBar title={t("checkout_title")} goBack />}
    >
      <View style={styles.content}>
        {/* shipping address */}
        <AddressCard
          city={CHECKOUT_ADDRESS.city}
          address={CHECKOUT_ADDRESS.address}
          type={CHECKOUT_ADDRESS.type}
        />
        {/* payment method */}
        <PaymentCard
          cardNumber={CHECKOUT_PAYMENT.cardNumber}
          cardType={CHECKOUT_PAYMENT.cardType}
          expiryDate={CHECKOUT_PAYMENT.expiryDate}
          isDefault={CHECKOUT_PAYMENT.isDefault}
        />
        {/* order items */}
        <OrderSummaryList items={CHECKOUT_ITEMS} />
      </View>
    </ScreenLayout>
  );
};

export default CheckoutScreen;
