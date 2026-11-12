import { Button, TextInput } from "@/components/ui/inputs";
import { ScreenLayout } from "@/components/ui/layout";
import { TopBar } from "@/components/ui/navigations";
import { useTranslation } from "@/hooks";
import { View } from "react-native";
import styles from "./changePasswordScreenStyles";

const ChangePasswordScreen = () => {
  const { t } = useTranslation();

  return (
    <ScreenLayout
      dismissKeyboardOnTap
      renderTopBar={() => (
        <TopBar title={t("common_changePassword")} goBack />
      )}
    >
      <View style={styles.form}>
        <TextInput
          type="password"
          label={t("auth_changePasswordFieldCurrent")}
          placeholder={t("account_placeholderCurrentPassword")}
          value=""
        />
        <TextInput
          type="password"
          label={t("auth_changePasswordFieldNew")}
          placeholder={t("common_placeholderNewPassword")}
          value=""
        />
        <TextInput
          type="password"
          label={t("auth_changePasswordFieldConfirm")}
          placeholder={t("common_placeholderConfirmPassword")}
          value=""
        />
      </View>

      <Button
        title={t("common_save")}
        onPress={() => {}}
        style={styles.submitButton}
      />
    </ScreenLayout>
  );
};

export default ChangePasswordScreen;
