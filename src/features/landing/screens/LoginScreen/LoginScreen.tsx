import { Typography } from "@/components/ui/display";
import { Button, IconButton, TextInput } from "@/components/ui/inputs";
import { ScreenLayout } from "@/components/ui/layout";
import { useTheme, useTranslation } from "@/hooks";
import { router } from "expo-router";
import { View } from "react-native";
import { Heading } from "../../components";
import styles from "./LoginScreenStyles";

const LoginScreen = () => {
  const { t } = useTranslation();
  const colors = useTheme();

  return (
    <ScreenLayout dismissKeyboardOnTap contentContainerStyle={styles.container}>
      <Heading title={t("auth_loginTitle")} subtitle={t("auth_loginSub")} />

      <View style={styles.form}>
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

        <Button
          title={t("auth_forgotPasswordLink")}
          variant="link"
          size="sm"
          onPress={() => {}}
          style={styles.forgotPasswordButton}
        />
      </View>

      <View style={styles.actions}>
        <View style={styles.signInRow}>
          <Button
            title={t("auth_signInButton")}
            onPress={() => {}}
            style={styles.signInButton}
          />
          <IconButton icon="biometric" onPress={() => {}} />
        </View>

        <View style={styles.createAccountRow}>
          <Typography
            variant="smallRegular"
            color={colors.foreground.secondary}
          >
            {t("auth_noAccountLabel")}
          </Typography>
          <Button
            title={t("auth_createAccountTitle")}
            variant="link"
            size="sm"
            onPress={() => router.push("/createAccount")}
            style={styles.createAccountButton}
          />
        </View>
      </View>
    </ScreenLayout>
  );
};

export default LoginScreen;
