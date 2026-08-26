import { BottomSheetRef } from "@/components/ui/overlay";
import { useTranslation } from "@/src/hooks";
import { useRouter } from "expo-router";
import { useRef, useState } from "react";

const addressesList = [
  {
    id: "1",
    type: "home",
    governorate: "Cairo",
    streetName: "El Nasr Street",
    buildingNum: "12",
    city: "Nasr City",
    floorNum: "1",
    landMark: "Omar Shaheen Hospital",
  },
  {
    id: "2",
    type: "office",
    governorate: "Giza",
    streetName: "Gameat El Dewal El Arabeya",
    buildingNum: "45",
    city: "Mohandessin",
    floorNum: "3",
    landMark: "Mustafa Mahmoud Mosque",
  },
  {
    id: "3",
    type: "apartment",
    governorate: "Alexandria",
    streetName: "El Geish Road",
    buildingNum: "8",
    city: "Sidi Gaber",
    floorNum: "5",
    landMark: "Sidi Gaber Station",
  },
] as const;

const useAddressListScreen = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const currentOpenedAddress = useRef<string | null>(null);
  const addressBottomSheetRef = useRef<BottomSheetRef | null>(null);
  const [selectedId, setSelectedId] = useState<string>(addressesList[0].id);

  const selectedAddress =
    addressesList.find((address) => address.id === selectedId) ??
    addressesList[0];

  const AddressFullInfoHandler = (id: string) => {
    currentOpenedAddress.current = id;
    addressBottomSheetRef.current?.expand();
  };

  const setAddressAsDefaultHandler = () => {
    if (currentOpenedAddress.current) {
      setSelectedId(currentOpenedAddress.current);
      addressBottomSheetRef.current?.close();
    }
  };

  const deleteAddressHandler = () => {
    addressBottomSheetRef.current?.close();
  };

  const editAddressHandler = () => {
    addressBottomSheetRef.current?.close();
  };

  return {
    addressesList,
    t,
    router,
    selectedId,
    selectedAddress,
    AddressFullInfoHandler,
    addressBottomSheetRef,
    setAddressAsDefaultHandler,
    editAddressHandler,
    deleteAddressHandler,
  };
};

export default useAddressListScreen;
