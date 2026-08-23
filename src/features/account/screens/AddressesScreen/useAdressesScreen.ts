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

// The card shows a single street line, while the bottom sheet breaks the same
// address into its individual fields.
const formatStreetLine = (address: (typeof addressesList)[number]) =>
  `${address.buildingNum} ${address.streetName}, ${address.city}`;

const useAdressesScreen = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const [selectedId, setSelectedId] = useState<string>(addressesList[0].id);
  const addressBottomSheetRef = useRef<BottomSheetRef | null>(null);

  const selectedAddress =
    addressesList.find((address) => address.id === selectedId) ??
    addressesList[0];

  const SelectAddressHandler = (id: string) => {
    setSelectedId(id);
    addressBottomSheetRef.current?.expand();
  };

  return {
    addressesList,
    t,
    router,
    selectedId,
    selectedAddress,
    formatStreetLine,
    SelectAddressHandler,
    addressBottomSheetRef,
  };
};

export default useAdressesScreen;
