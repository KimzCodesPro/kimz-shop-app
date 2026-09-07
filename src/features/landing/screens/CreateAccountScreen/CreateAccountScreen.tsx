import { Button, TextInput } from "@/components/ui/inputs";
import { ScreenLayout } from "@/components/ui/layout";
import { useTranslation } from "@/hooks";
import { View } from "react-native";
import { Heading } from "../../components";
import styles from "./createAccountScreenStyles";

const CreateAccountScreen = () => {
  const { t } = useTranslation();

  return (
    <ScreenLayout dismissKeyboardOnTap contentContainerStyle={styles.container}>
      <Heading
        title={t("auth_createAccountTitle")}
        subtitle={t("auth_createAccountSubtitle")}
      />

      <View style={styles.form}>
        <TextInput
          iconName="user"
          label={t("auth_fieldUserName")}
          placeholder={t("auth_placeholderUserName")}
          value=""
        />
        <TextInput
          iconName="mail"
          label={t("auth_fieldEmail")}
          placeholder={t("auth_placeholderEmail")}
          value=""
        />
        <TextInput
          type="password"
          label={t("auth_fieldPassword")}
          placeholder={t("auth_placeholderPassword")}
          value=""
        />
      </View>

      <Button
        style={styles.actions}
        title={t("auth_createAccountTitle")}
        onPress={() => {}}
      />
    </ScreenLayout>
  );
};

export default CreateAccountScreen;
