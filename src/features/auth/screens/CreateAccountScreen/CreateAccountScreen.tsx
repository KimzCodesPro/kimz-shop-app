import { Button, LanguageSwitcher, TextInput } from "@/components/ui/inputs";
import { ScreenLayout } from "@/components/ui/layout";
import { Typography } from "@/components/ui/typography";
import { useTheme, useTranslation } from "@/hooks";
import { router } from "expo-router";
import { View } from "react-native";
import { Heading } from "../../components";
import styles from "./createAccountScreenStyles";

const CreateAccountScreen = () => {
  const { t } = useTranslation();
  const colors = useTheme();

  return (
    <ScreenLayout dismissKeyboardOnTap contentContainerStyle={styles.container}>
      <LanguageSwitcher style={styles.languageSwitcher} />
      <Heading
        title={t("auth_createAccountTitle")}
        subtitle={t("auth_createAccountSubtitle")}
      />

      <View style={styles.form}>
        <TextInput
          icon="user"
          label={t("auth_fieldUserName")}
          placeholder={t("auth_placeholderUserName")}
          value=""
        />
        <TextInput
          icon="mail"
          label={t("auth_fieldEmail")}
          placeholder={t("auth_placeholderEmail")}
          value=""
        />
        <TextInput
          type="password"
          label={t("auth_fieldNewPassword")}
          placeholder={t("auth_placeholderPassword")}
          value=""
        />
      </View>
      <View style={styles.actions}>
        <Button title={t("auth_createAccountTitle")} onPress={() => {}} />
        {/* second option row - dont have an account  */}
        <View style={styles.secondActionRow}>
          <Typography
            variant="smallRegular"
            color={colors.foreground.secondary}
          >
            {t("auth_haveAccountLabel")}
          </Typography>
          <Button
            title={t("auth_signInButton")}
            variant="link"
            size="sm"
            onPress={() => router.replace("/loginAccount")}
            style={styles.secondActionCreateAccountButton}
          />
        </View>
      </View>
    </ScreenLayout>
  );
};

export default CreateAccountScreen;
