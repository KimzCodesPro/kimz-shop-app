import { Button, Dropdown, TextInput } from "@/components/ui/inputs";
import { ScreenLayout } from "@/components/ui/layout";
import { TopBar } from "@/components/ui/navigations";
import { View } from "react-native";
import styles from "./addNewAddressScreenStyles";
import { GOVERNORATE_OPTIONS } from "./constants";
import useAddNewAddressScreen from "./useAddNewAddressScreen";

const AddNewAddressScreen = () => {
  const { t, addressTypeOptions } = useAddNewAddressScreen();

  return (
    <ScreenLayout
      scrollable
      renderTopBar={() => <TopBar title={t("account_addNewAddress")} goBack />}
    >
      <View style={styles.form}>
        <Dropdown
          label={t("account_addressType")}
          placeholder={t("account_placeholderAddressType")}
          iconName="map-pin"
          options={addressTypeOptions}
          value=""
          onSelect={() => {}}
        />
        <TextInput
          label={t("account_streetName")}
          placeholder={t("account_placeholderStreetName")}
          iconName="map-pin-other"
          value=""
        />
        <TextInput
          label={t("account_buildingName")}
          placeholder={t("account_placeholderBuildingName")}
          iconName="building"
          value=""
        />
        <Dropdown
          label={t("account_governorate")}
          placeholder={t("account_placeholderGovernorate")}
          iconName="world"
          options={GOVERNORATE_OPTIONS}
          value=""
          onSelect={() => {}}
        />
        <TextInput
          label={t("account_city")}
          placeholder={t("account_placeholderCity")}
          iconName="home"
          value=""
        />
        <TextInput
          label={t("account_floorNumber")}
          placeholder={t("account_placeholderFloorNumber")}
          iconName="layers"
          value=""
        />
        <TextInput
          label={t("account_landmark")}
          placeholder={t("account_placeholderLandmark")}
          iconName="info-circle"
          value=""
        />
      </View>

      <Button
        title={t("account_saveAddress")}
        onPress={() => {}}
        style={styles.submitButton}
      />
    </ScreenLayout>
  );
};

export default AddNewAddressScreen;
