import { AddressCard } from "@/components/ui/display";
import { Button } from "@/components/ui/inputs";
import { ScreenLayout, VerticalScrollView } from "@/components/ui/layout";
import { TopBar } from "@/components/ui/navigations";

import { BottomSheet } from "@/components/ui/overlay";
import { View } from "react-native";
import styles from "./addressesScreenStyles";
import useAdressesScreen from "./useAdressesScreen";

const AddressesScreen = () => {
  const {
    addressesList,
    t,
    router,
    selectedId,
    SelectAddressHandler,
    addressBottomSheetRef,
  } = useAdressesScreen();

  return (
    <>
      <ScreenLayout
        renderTopBar={() => <TopBar title={t("account_address")} goBack />}
      >
        {/* The list scrolls on its own so the button below stays pinned. */}
        <VerticalScrollView style={styles.scrollView}>
          <View style={styles.list}>
            {addressesList.map((item) => (
              <AddressCard
                key={item.id}
                city={item.city}
                address={item.address}
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
      {/* theme bottom sheet */}
      <BottomSheet
        ref={addressBottomSheetRef}
        bottomSheetProps={{ snapPoints: ["40%"] }}
        title={t("account_theme")}
      >
        <BottomSheet.Content></BottomSheet.Content>
      </BottomSheet>
    </>
  );
};

export default AddressesScreen;
