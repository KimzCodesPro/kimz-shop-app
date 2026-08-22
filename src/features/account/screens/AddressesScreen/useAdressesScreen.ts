import { BottomSheetRef } from "@/components/ui/overlay";
import { useTranslation } from "@/src/hooks";
import { useRouter } from "expo-router";
import { useRef, useState } from "react";

const addressesList = [
  {
    id: "1",
    city: "Cairo",
    address: "12 El Nasr Street, Nasr City",
    type: "home",
  },
  {
    id: "2",
    city: "Giza",
    address: "45 Gameat El Dewal El Arabeya, Mohandessin",
    type: "office",
  },
  {
    id: "3",
    city: "Alexandria",
    address: "8 El Geish Road, Sidi Gaber",
    type: "apartment",
  },
] as const;

const useAdressesScreen = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const [selectedId, setSelectedId] = useState<string>(addressesList[0].id);
  const addressBottomSheetRef = useRef<BottomSheetRef | null>(null);

  const SelectAddressHandler = (id: string) => {
    setSelectedId(id);
    addressBottomSheetRef.current?.expand();
  };

  return {
    addressesList,
    t,
    router,
    selectedId,
    SelectAddressHandler,
    addressBottomSheetRef,
  };
};

export default useAdressesScreen;
