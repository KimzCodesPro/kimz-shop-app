import { userPlaceholder } from "@/assets/images";
import { Avatar } from "@/components/ui/display";
import { Button, TextInput } from "@/components/ui/inputs";
import { ScreenLayout } from "@/components/ui/layout";
import { TopBar } from "@/components/ui/navigations";
import { useTranslation } from "@/hooks";
import { View } from "react-native";
import styles from "./editProfileScreenStyles";

const EditProfileScreen = () => {
  const { t } = useTranslation();

  return (
    <ScreenLayout
      dismissKeyboardOnTap
      renderTopBar={() => <TopBar title={t("account_editProfile")} goBack />}
    >
      <Avatar
        size="lg"
        enableUploader
        imgSrc={userPlaceholder}
        style={styles.avatar}
      />
      <View style={styles.form}>
        <TextInput
          label={t("account_username")}
          placeholder={t("account_placeholderUserName")}
          iconName="user"
          value=""
        />
        <TextInput
          label={t("account_email")}
          placeholder={t("account_placeholderEmail")}
          iconName="mail"
          value=""
        />
        <TextInput
          label={t("account_phoneNumber")}
          placeholder={t("account_placeholderPhoneNumber")}
          iconName="bell"
          value=""
        />
        <TextInput
          type="password"
          label={t("account_passwordToConfirm")}
          placeholder={t("account_placeholderPasswordToConfirm")}
          value=""
        />
      </View>
      <Button
        title={t("account_saveChanges")}
        onPress={() => {}}
        style={styles.submitButton}
      />
    </ScreenLayout>
  );
};

export default EditProfileScreen;
