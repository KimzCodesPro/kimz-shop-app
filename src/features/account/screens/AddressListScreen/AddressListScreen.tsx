import { Button } from "@/components/ui/inputs";
import { ScreenLayout, VerticalScrollView } from "@/components/ui/layout";
import { TopBar } from "@/components/ui/navigations";

import { BottomSheet } from "@/components/ui/overlay";
import { AddressDetails, AddressesList } from "./components";
import addressesList from "./components/AddressesList/data";
import useAddressListScreen from "./useAddressListScreen";

const AddressListScreen = () => {
  const {
    t,
    router,
    selectedItemId,
    addressBottomSheetRef,
    AddressOpenFullInfoHandler,
    selectedAddressInfo,
    deleteAddressHandler,
    editAddressHandler,
    setAddressAsDefaultHandler,
  } = useAddressListScreen();

  return (
    <>
      <ScreenLayout
        renderTopBar={() => <TopBar title={t("account_address")} goBack />}
      >
        <VerticalScrollView>
          <AddressesList
            items={addressesList}
            selectedItem={selectedItemId}
            onPress={AddressOpenFullInfoHandler}
          />
        </VerticalScrollView>

        <Button
          title={t("account_addNewAddress")}
          onPress={() => router.push("/account/addNewAddress")}
        />
      </ScreenLayout>
      {/* details of the address the user tapped */}
      <BottomSheet
        ref={addressBottomSheetRef}
        bottomSheetProps={{ snapPoints: ["59%"] }}
        title={t("account_addressDetails")}
      >
        <BottomSheet.Content>
          <AddressDetails
            type={selectedAddressInfo.type}
            governorate={selectedAddressInfo.governorate}
            streetName={selectedAddressInfo.streetName}
            buildingNum={selectedAddressInfo.buildingNum}
            city={selectedAddressInfo.city}
            floorNum={selectedAddressInfo.floorNum}
            landMark={selectedAddressInfo.landMark}
            editHandler={editAddressHandler}
            deleteHandler={deleteAddressHandler}
            setAsDefaultHandler={setAddressAsDefaultHandler}
          />
        </BottomSheet.Content>
      </BottomSheet>
    </>
  );
};

export default AddressListScreen;
