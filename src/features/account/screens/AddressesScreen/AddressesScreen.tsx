import { AddressCard } from "@/components/ui/display";
import { Button } from "@/components/ui/inputs";
import { ScreenLayout, VerticalScrollView } from "@/components/ui/layout";
import { TopBar } from "@/components/ui/navigations";

import { BottomSheet } from "@/components/ui/overlay";
import { View } from "react-native";
import styles from "./addressesScreenStyles";
import { AddressDetails } from "./components";
import useAdressesScreen from "./useAdressesScreen";

const AddressesScreen = () => {
  const {
    addressesList,
    t,
    router,
    selectedId,
    selectedAddress,
    formatStreetLine,
    SelectAddressHandler,
    addressBottomSheetRef,
  } = useAdressesScreen();

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
                address={formatStreetLine(item)}
                type={item.type}
                isSelected={selectedId === item.id}
                onPress={() => SelectAddressHandler(item.id)}
              />
            ))}
          </View>
        </VerticalScrollView>

        <Button
          title={t("account_addNewAddress")}
          onPress={() => router.push("/account/addAddress")}
        />
      </ScreenLayout>
      {/* details of the address the user tapped */}
      <BottomSheet
        ref={addressBottomSheetRef}
        bottomSheetProps={{ snapPoints: ["63%"] }}
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
          />
        </BottomSheet.Content>
      </BottomSheet>
    </>
  );
};

export default AddressesScreen;
