import { Typography } from "@/components/ui/typography";
import { Button, IconButton, TextInput } from "@/components/ui/inputs";
import { ScreenLayout } from "@/components/ui/layout";
import { BottomSheet, BottomSheetRef } from "@/components/ui/overlay";
import { useTheme, useTranslation } from "@/hooks";
import { router } from "expo-router";
import { useRef } from "react";
import { View } from "react-native";
import { Heading } from "../../components";
import styles from "./LoginScreenAccountStyles";

const LoginAccountScreen = () => {
  const { t } = useTranslation();
  const colors = useTheme();

  const forgotPasswordSheetRef = useRef<BottomSheetRef | null>(null);

  const sendCodeHandler = () => {
    forgotPasswordSheetRef.current?.close();
    router.push("/verification");
  };

  return (
    <>
      <ScreenLayout
        dismissKeyboardOnTap
        contentContainerStyle={styles.container}
      >
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
            onPress={() => forgotPasswordSheetRef.current?.expand()}
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
              onPress={() => router.replace("/createAccount")}
              style={styles.secondActionCreateAccountButton}
            />
          </View>
        </View>
      </ScreenLayout>
      {/* forgot password bottom sheet */}
      <BottomSheet
        ref={forgotPasswordSheetRef}
        bottomSheetProps={{
          snapPoints: ["38%"],
        }}
        title={t("auth_forgotPasswordTitle")}
        description={t("auth_forgotPasswordSub")}
      >
        <BottomSheet.Content style={styles.forgotPasswordSheetContent}>
          <TextInput
            iconName="mail"
            label={t("auth_fieldEmail")}
            placeholder={t("auth_placeholderEmail")}
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

export default LoginAccountScreen;
