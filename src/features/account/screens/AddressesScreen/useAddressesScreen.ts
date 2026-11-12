import { BottomSheetRef } from "@/components/ui/overlay";
import { useTranslation } from "@/hooks";
import { useRouter } from "expo-router";
import { useRef, useState } from "react";
import addressesList from "./data";

const useAddressesScreen = () => {
  const router = useRouter();

  const addressBottomSheetRef = useRef<BottomSheetRef | null>(null);

  const [selectedItemId, seSelectedItemId] = useState<string>("1");
  const [currentOpenedAddress, setCurrentOpenedAddress] = useState<
    string | null
  >(null);

  const selectedAddressInfo =
    addressesList.find((item) => item.id === currentOpenedAddress) ??
    addressesList[0];

  const AddressOpenFullInfoHandler = (id: string) => {
    setCurrentOpenedAddress(id);
    addressBottomSheetRef.current?.present();
  };

  const setAddressAsDefaultHandler = () => {
    if (currentOpenedAddress) {
      seSelectedItemId(currentOpenedAddress);
      addressBottomSheetRef.current?.dismiss();
    }
  };

  const deleteAddressHandler = () => {
    addressBottomSheetRef.current?.dismiss();
  };

  const editAddressHandler = () => {
    addressBottomSheetRef.current?.dismiss();
  };

  const { t } = useTranslation();

  return {
    t,
    addressesList,
    router,
    selectedItemId,
    addressBottomSheetRef,
    AddressOpenFullInfoHandler,
    selectedAddressInfo,
    deleteAddressHandler,
    editAddressHandler,
    setAddressAsDefaultHandler,
  };
};

export default useAddressesScreen;
