import {
  Button,
  IconButton,
  LanguageSwitcher,
  TextInput,
} from "@/components/ui/inputs";
import { ScreenLayout } from "@/components/ui/layout";
import { BottomSheet } from "@/components/ui/overlay";
import { Typography } from "@/components/ui/typography";
import { View } from "react-native";
import { Header } from "../../components";
import styles from "./loginScreenStyles";
import useLoginScreen from "./useLoginScreen";

const LoginScreen = () => {
  const {
    t,
    colors,
    forgotPasswordBottomSheetRef,
    openForgotPasswordSheetHandler,
    sendCodeHandler,
    createAccountHandler,
  } = useLoginScreen();

  return (
    <>
      <ScreenLayout
        dismissKeyboardOnTap
        contentContainerStyle={styles.container}
      >
        <LanguageSwitcher style={styles.languageSwitcher} />

        <Header title={t("auth_loginTitle")} subtitle={t("auth_loginSub")} />

        <View style={styles.formContainer}>
          <TextInput
            icon="mail"
            label={t("common_fieldEmail")}
            placeholder={t("common_placeholderEmail")}
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
            onPress={openForgotPasswordSheetHandler}
            style={styles.forgotPasswordButton}
          />
        </View>

        <View style={styles.actions}>
          <View style={styles.mainActionRow}>
            <Button
              title={t("auth_signInButton")}
              onPress={() => {}}
              style={styles.mainActionSignInButton}
            />
            <IconButton icon="biometric" onPress={() => {}} />
          </View>
          {/* second option row - dont have an account  */}
          <View style={styles.secondActionRow}>
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
              onPress={createAccountHandler}
              style={styles.secondActionCreateAccountButton}
            />
          </View>
        </View>
      </ScreenLayout>
      {/* forgot password bottom sheet */}
      <BottomSheet
        ref={forgotPasswordBottomSheetRef}
        bottomSheetProps={{
          snapPoints: ["38%"],
        }}
        title={t("auth_forgotPasswordTitle")}
        description={t("auth_forgotPasswordSub")}
      >
        <BottomSheet.Content style={styles.forgotPasswordSheetContent}>
          <TextInput
            icon="mail"
            label={t("common_fieldEmail")}
            placeholder={t("common_placeholderEmail")}
            value=""
          />
          <Button
            title={t("auth_forgotPasswordSendCodeButton")}
            onPress={sendCodeHandler}
          />
        </BottomSheet.Content>
      </BottomSheet>
    </>
  );
};

export default LoginScreen;
