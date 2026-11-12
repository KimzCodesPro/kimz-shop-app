import { AddressCard, PaymentCard } from "@/components/ui/card";
import { Button } from "@/components/ui/inputs";
import { ScreenLayout, SectionTitle } from "@/components/ui/layout";
import { TopBar } from "@/components/ui/navigations";
import { BottomSheet } from "@/components/ui/overlay";
import { View } from "react-native";
import styles from "./checkoutScreenStyles";
import { OrderSummaryList, PriceInfo } from "./components";
import { CHECKOUT_ITEMS, CHECKOUT_PRICES } from "./data";
import useCheckoutScreen from "./useCheckoutScreen";

const CheckoutScreen = () => {
  const {
    t,
    addNewAddressHandler,
    addNewPaymentHandler,
    addressBottomSheetRef,
    paymentBottomSheetRef,
    openAddressSheetHandler,
    openPaymentSheetHandler,
    addresses,
    selectedAddressId,
    setSelectedAddressId,
    selectedAddress,
    payments,
    selectedPaymentId,
    setSelectedPaymentId,
    selectedPayment,
  } = useCheckoutScreen();

  return (
    <>
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
              onActionPress={openAddressSheetHandler}
            />
            <AddressCard
              city={selectedAddress.city}
              address={selectedAddress.address}
              type={selectedAddress.type}
            />
          </View>

          {/* payment method */}
          <View style={styles.section}>
            <SectionTitle
              title={t("checkout_paymentMethod")}
              actionText={t("checkout_change")}
              onActionPress={openPaymentSheetHandler}
            />
            <PaymentCard
              cardNumber={selectedPayment.cardNumber}
              cardType={selectedPayment.cardType}
              expiryDate={selectedPayment.expiryDate}
              variant={selectedPayment.variant}
              isDefault={selectedPayment.isDefault}
            />
          </View>
          {/* order items */}
          <View style={styles.section}>
            <SectionTitle title={t("checkout_orderSummary")} />
            <OrderSummaryList items={CHECKOUT_ITEMS} />
          </View>
          {/* price info */}
          <PriceInfo
            subtotal={CHECKOUT_PRICES.subtotal}
            shipping={CHECKOUT_PRICES.shipping}
            tax={CHECKOUT_PRICES.tax}
            total={CHECKOUT_PRICES.total}
          />
        </View>
      </ScreenLayout>

      {/* change shipping address */}
      <BottomSheet
        ref={addressBottomSheetRef}
        bottomSheetProps={{ snapPoints: ["60%"] }}
        title={t("checkout_addressSheetTitle")}
      >
        <BottomSheet.Content>
          <View style={styles.sheetList}>
            {addresses.map((item) => (
              <AddressCard
                key={item.id}
                city={item.city}
                address={item.address}
                type={item.type}
                isSelected={item.id === selectedAddressId}
                onPress={() => setSelectedAddressId(item.id)}
              />
            ))}
          </View>
          <Button
            icon="map-pin"
            variant="link"
            title={t("account_addAddressTitle")}
            onPress={addNewAddressHandler}
          />
        </BottomSheet.Content>
      </BottomSheet>

      {/* change payment method */}
      <BottomSheet
        ref={paymentBottomSheetRef}
        bottomSheetProps={{ snapPoints: ["60%"] }}
        title={t("checkout_paymentSheetTitle")}
      >
        <BottomSheet.Content>
          <View style={styles.sheetList}>
            {payments.map((item) => (
              <PaymentCard
                key={item.id}
                cardNumber={item.cardNumber}
                cardType={item.cardType}
                expiryDate={item.expiryDate}
                variant={item.variant}
                isDefault={item.isDefault}
                isSelected={item.id === selectedPaymentId}
                onPress={() => setSelectedPaymentId(item.id)}
              />
            ))}
          </View>
          <Button
            icon="map-pin"
            variant="link"
            title={t("checkout_paymentAddNew")}
            onPress={addNewPaymentHandler}
          />
        </BottomSheet.Content>
      </BottomSheet>
    </>
  );
};

export default CheckoutScreen;
