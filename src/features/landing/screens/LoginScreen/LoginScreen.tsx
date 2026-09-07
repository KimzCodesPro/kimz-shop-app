import { Typography } from "@/components/ui/display";
import { Button, IconButton, TextInput } from "@/components/ui/inputs";
import { ScreenLayout } from "@/components/ui/layout";
import { useTranslation } from "@/hooks";
import { router } from "expo-router";
import { View } from "react-native";
import { Heading } from "../../components";
import useStyles from "./useStyles";

const LoginScreen = () => {
  const { t } = useTranslation();
  const { styles, colors } = useStyles();

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
        <View style={styles.actionsRow}>
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
          />
        </View>
      </View>
    </ScreenLayout>
  );
};

export default LoginScreen;
