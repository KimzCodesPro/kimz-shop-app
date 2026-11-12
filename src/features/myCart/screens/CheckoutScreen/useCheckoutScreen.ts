import { BottomSheetRef } from "@/components/ui/overlay";
import { useTranslation } from "@/hooks";
import { useRouter } from "expo-router";
import { useRef, useState } from "react";
import { CHECKOUT_ADDRESSES, CHECKOUT_PAYMENTS } from "./data";

const useCheckoutScreen = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const addressBottomSheetRef = useRef<BottomSheetRef | null>(null);
  const paymentBottomSheetRef = useRef<BottomSheetRef | null>(null);

  // first address is the default
  const [selectedAddressId, setSelectedAddressId] = useState<string>(
    CHECKOUT_ADDRESSES[0].id,
  );

  const selectedAddress =
    CHECKOUT_ADDRESSES.find((item) => item.id === selectedAddressId) ??
    CHECKOUT_ADDRESSES[0];

  // first card is the default
  const [selectedPaymentId, setSelectedPaymentId] = useState<string>(
    CHECKOUT_PAYMENTS[0].id,
  );

  const selectedPayment =
    CHECKOUT_PAYMENTS.find((item) => item.id === selectedPaymentId) ??
    CHECKOUT_PAYMENTS[0];

  const openAddressSheetHandler = () => {
    addressBottomSheetRef.current?.present();
  };

  const openPaymentSheetHandler = () => {
    paymentBottomSheetRef.current?.present();
  };

  // close the sheet first, then go to the add screen
  const addNewAddressHandler = () => {
    addressBottomSheetRef.current?.dismiss();
    router.push("/account/addNewAddress");
  };

  const addNewPaymentHandler = () => {
    paymentBottomSheetRef.current?.dismiss();
    router.push("/account/addNewPaymentMethod");
  };

  return {
    t,
    addressBottomSheetRef,
    paymentBottomSheetRef,
    openAddressSheetHandler,
    openPaymentSheetHandler,
    addNewAddressHandler,
    addNewPaymentHandler,
    addresses: CHECKOUT_ADDRESSES,
    selectedAddressId,
    setSelectedAddressId,
    selectedAddress,
    payments: CHECKOUT_PAYMENTS,
    selectedPaymentId,
    setSelectedPaymentId,
    selectedPayment,
  };
};

export default useCheckoutScreen;
