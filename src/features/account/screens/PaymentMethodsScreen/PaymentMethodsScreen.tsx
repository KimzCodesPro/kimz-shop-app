import { Button } from "@/components/ui/inputs";
import { ScreenLayout, VerticalScrollView } from "@/components/ui/layout";
import { TopBar } from "@/components/ui/navigations";
import { BottomSheet } from "@/components/ui/overlay";
import { PaymentDetails, PaymentMethodsList } from "./components";
import usePaymentMethodsScreen from "./usePaymentMethodsScreen";

const PaymentMethodsScreen = () => {
  const {
    t,
    paymentMethodsList,
    selectedItemId,
    paymentBottomSheetRef,
    cardOpenFullInfoHandler,
    selectedCardInfo,
    setCardAsDefaultHandler,
    deleteCardHandler,
    addNewCardHandler,
  } = usePaymentMethodsScreen();

  return (
    <>
      <ScreenLayout
        renderTopBar={() => <TopBar title={t("common_paymentMethods")} goBack />}
      >
        <VerticalScrollView>
          <PaymentMethodsList
            items={paymentMethodsList}
            selectedItem={selectedItemId}
            onPress={cardOpenFullInfoHandler}
          />
        </VerticalScrollView>

        <Button
          title={t("common_addNewCard")}
          onPress={addNewCardHandler}
        />
      </ScreenLayout>
      {/* details of the card the user tapped */}
      <BottomSheet
        ref={paymentBottomSheetRef}
        bottomSheetProps={{ snapPoints: ["42%"] }}
        title={t("paymentMethods_paymentDetailTitle")}
      >
        <BottomSheet.Content>
          <PaymentDetails
            cardType={selectedCardInfo.cardType}
            cardNumber={selectedCardInfo.cardNumber}
            expiryDate={selectedCardInfo.expiryDate}
            cardHolderName={selectedCardInfo.cardHolderName}
            setAsDefaultHandler={setCardAsDefaultHandler}
            deleteHandler={deleteCardHandler}
          />
        </BottomSheet.Content>
      </BottomSheet>
    </>
  );
};

export default PaymentMethodsScreen;
