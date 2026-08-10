import { TextInput } from "@/components/ui/inputs";
import { ScreenLayout } from "@/components/ui/layout";
import { TopBar } from "@/components/ui/navigations";
import { useTranslation } from "@/hooks";
import styles from "./editProfileScreenStyles";

const EditProfileScreen = () => {
  const { t } = useTranslation();

  return (
    <ScreenLayout
      scrollable
      renderTopBar={() => <TopBar title={t("account_editProfile")} goBack />}
      contentContainerStyle={styles.form}
    >
      <TextInput
        label={t("account_username")}
        placeholder={t("account_usernamePlaceholder")}
        iconName="user"
        value=""
      />
      <TextInput
        label={t("account_email")}
        placeholder={t("account_emailPlaceholder")}
        iconName="mail"
        value=""
      />
      <TextInput
        label={t("account_phoneNumber")}
        placeholder={t("account_phoneNumberPlaceholder")}
        iconName="bell"
        value=""
      />
      <TextInput
        type="password"
        label={t("account_passwordToConfirm")}
        placeholder={t("account_passwordToConfirmPlaceholder")}
        value=""
      />
    </ScreenLayout>
  );
};

export default EditProfileScreen;
