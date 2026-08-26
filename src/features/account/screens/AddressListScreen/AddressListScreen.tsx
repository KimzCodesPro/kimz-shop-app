import { AddressCard } from "@/components/ui/display";
import { Button } from "@/components/ui/inputs";
import { ScreenLayout, VerticalScrollView } from "@/components/ui/layout";
import { TopBar } from "@/components/ui/navigations";

import { BottomSheet } from "@/components/ui/overlay";
import { View } from "react-native";
import styles from "./addressListScreenStyles";
import { AddressDetails } from "./components";
import useAddressListScreen from "./useAddressListScreen";

const AddressListScreen = () => {
  const {
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
  } = useAddressListScreen();

  return (
    <>
      <ScreenLayout
        renderTopBar={() => <TopBar title={t("account_address")} goBack />}
      >
        <VerticalScrollView>
          <View style={styles.list}>
            {addressesList.map((item) => (
              <AddressCard
                key={item.id}
                city={item.governorate}
                address={`${item.buildingNum} ${item.streetName}, ${item.city}`}
                type={item.type}
                isSelected={selectedId === item.id}
                onPress={() => AddressFullInfoHandler(item.id)}
              />
            ))}
          </View>
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
            type={selectedAddress.type}
            governorate={selectedAddress.governorate}
            streetName={selectedAddress.streetName}
            buildingNum={selectedAddress.buildingNum}
            city={selectedAddress.city}
            floorNum={selectedAddress.floorNum}
            landMark={selectedAddress.landMark}
            setAsDefaultHandler={setAddressAsDefaultHandler}
            editHandler={editAddressHandler}
            deleteHandler={deleteAddressHandler}
          />
        </BottomSheet.Content>
      </BottomSheet>
    </>
  );
};

export default AddressListScreen;
