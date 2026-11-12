import { Button, CheckBox, TextInput } from "@/components/ui/inputs";
import { ScreenLayout } from "@/components/ui/layout";
import { TopBar } from "@/components/ui/navigations";
import { Typography } from "@/components/ui/typography";
import { Pressable, View } from "react-native";
import styles from "./addNewPaymentMethodScreenStyles";
import useAddNewPaymentMethodScreen from "./useAddNewPaymentMethodScreen";

const AddNewPaymentMethodScreen = () => {
  const {
    t,
    colors,
    isDefault,
    toggleDefaultHandler,
    expiryDate,
    expiryDateChangeHandler,
  } = useAddNewPaymentMethodScreen();

  return (
    <ScreenLayout
      scrollable
      renderTopBar={() => <TopBar title={t("addCard_title")} goBack />}
    >
      <View style={styles.form}>
        <TextInput
          label={t("addCard_number")}
          placeholder={t("addCard_placeholderNumber")}
          icon="credit-card"
          value=""
          maxLength={19}
          keyboardType="number-pad"
        />
        <TextInput
          label={t("addCard_name")}
          placeholder={t("addCard_placeholderName")}
          icon="user"
          value=""
          maxLength={26}
        />
        <TextInput
          label={t("addCard_expiry")}
          placeholder={t("addCard_placeholderExpiry")}
          icon="history"
          value={expiryDate}
          onChangeText={expiryDateChangeHandler}
          maxLength={5}
          keyboardType="number-pad"
        />
        <TextInput
          label={t("addCard_cvv")}
          placeholder={t("addCard_placeholderCvv")}
          icon="lock"
          value=""
          maxLength={3}
          keyboardType="number-pad"
        />
        {/* set as default */}
        <Pressable style={styles.setDefault} onPress={toggleDefaultHandler}>
          <CheckBox isChecked={isDefault} />
          <Typography variant="smallRegular" color={colors.foreground.primary}>
            {t("addCard_setDefault")}
          </Typography>
        </Pressable>
      </View>

      <Button
        title={t("addCard_save")}
        onPress={() => {}}
        style={styles.submitButton}
      />
    </ScreenLayout>
  );
};

export default AddNewPaymentMethodScreen;
