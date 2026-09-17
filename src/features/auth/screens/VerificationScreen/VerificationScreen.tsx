import { BottomSheet, BottomSheetRef } from "@/components/ui/overlay";
import { useTheme, useTranslation } from "@/hooks";
import { StatusHalo } from "@/src/components/ui/feedback";
import { Button, OtpInput, TextInput } from "@/src/components/ui/inputs";
import { ScreenLayout } from "@/src/components/ui/layout";
import { TopBar } from "@/src/components/ui/navigations";
import { Typography } from "@/src/components/ui/typography";
import { useRouter } from "expo-router";
import { useRef } from "react";
import { View } from "react-native";
import styles from "./VerificationScreenStyles";

const VerificationScreen = () => {
  const { t } = useTranslation();
  const colors = useTheme();
  const router = useRouter();
  const changePasswordSheetRef = useRef<BottomSheetRef | null>(null);
  return (
    <>
      <ScreenLayout
        contentContainerStyle={styles.container}
        horizontalCenterAlignment
        dismissKeyboardOnTap
        renderTopBar={() => <TopBar title={t("auth_verification")} goBack />}
      >
        <StatusHalo variant="info" icon="mail-opened" />
        <View style={styles.infoContainer}>
          <Typography
            textAlign="center"
            variant="largeBold"
            color={colors.foreground.primary}
            style={styles.infoContainerHeader}
          >
            {t("auth_verificationCode")}
          </Typography>
          <Typography
            textAlign="center"
            variant="smallRegular"
            color={colors.foreground.tertiary}
          >
            {t("auth_verificationCodeInfo")}
          </Typography>
          <Typography
            textAlign="center"
            variant="smallRegular"
            color={colors.foreground.primary}
          >
            magdalena83@mail.com
          </Typography>
        </View>

        <OtpInput
          onFocus={() => console.log("Focused")}
          onBlur={() => console.log("Blurred")}
          onTextChange={(text) => console.log(text)}
          onFilled={(text) => console.log(`OTP is ${text}`)}
          verifyFailed={false}
        />
        <View style={styles.actionRow}>
          <Typography variant="smallRegular" color={colors.foreground.primary}>
            {t("auth_verificationCodeResend")}
          </Typography>
          <Button
            variant="link"
            size="sm"
            onPress={() => console.log("Resend OTP")}
            title={t("common_resend")}
          />
        </View>
        <Button
          style={styles.submitButton}
          variant="primary"
          onPress={() => changePasswordSheetRef.current?.expand()}
          title={t("common_submit")}
        />
      </ScreenLayout>
      {/* Change Password Bottom Sheet */}
      <BottomSheet
        ref={changePasswordSheetRef}
        bottomSheetProps={{
          snapPoints: ["50%"],
        }}
        title={t("auth_verificationCreateNewPassword")}
        description={t("auth_verificationCreateNewPasswordDescription")}
      >
        <BottomSheet.Content style={styles.bottomSheetContent}>
          <TextInput
            type="password"
            label={t("auth_fieldPassword")}
            placeholder={t("auth_placeholderNewPassword")}
            value=""
          />
          <TextInput
            type="password"
            label={t("auth_fieldConfirmPassword")}
            placeholder={t("auth_placeholderConfirmPassword")}
            value=""
          />
          <Button
            style={styles.changePasswordButton}
            variant="primary"
            onPress={() => {
              changePasswordSheetRef.current?.close();
              router.replace("/PasswordChanged");
            }}
            title={t("auth_changePassword")}
          />
        </BottomSheet.Content>
      </BottomSheet>
    </>
  );
};

export default VerificationScreen;
