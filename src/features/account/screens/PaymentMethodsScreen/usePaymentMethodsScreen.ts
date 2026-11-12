import { BottomSheetRef } from "@/components/ui/overlay";
import { useTranslation } from "@/hooks";
import { useRouter } from "expo-router";
import { useRef, useState } from "react";
import paymentMethodsList from "./data";

const usePaymentMethodsScreen = () => {
  const { t } = useTranslation();
  const router = useRouter();

  const paymentBottomSheetRef = useRef<BottomSheetRef | null>(null);

  // first card is the default when the screen opens
  const [selectedItemId, setSelectedItemId] = useState<string>("1");
  const [currentOpenedCard, setCurrentOpenedCard] = useState<string | null>(
    null,
  );

  const selectedCardInfo =
    paymentMethodsList.find((item) => item.id === currentOpenedCard) ??
    paymentMethodsList[0];

  const cardOpenFullInfoHandler = (id: string) => {
    setCurrentOpenedCard(id);
    paymentBottomSheetRef.current?.present();
  };

  const setCardAsDefaultHandler = () => {
    if (currentOpenedCard) {
      setSelectedItemId(currentOpenedCard);
      paymentBottomSheetRef.current?.dismiss();
    }
  };

  const deleteCardHandler = () => {
    paymentBottomSheetRef.current?.dismiss();
  };

  const addNewCardHandler = () => {
    router.push("/account/addNewPaymentMethod");
  };

  return {
    t,
    paymentMethodsList,
    selectedItemId,
    paymentBottomSheetRef,
    cardOpenFullInfoHandler,
    selectedCardInfo,
    setCardAsDefaultHandler,
    deleteCardHandler,
    addNewCardHandler,
  };
};

export default usePaymentMethodsScreen;
