import { StatusHalo } from "@/components/ui/feedback";
import { Button, OtpInput, TextInput } from "@/components/ui/inputs";
import { ScreenLayout } from "@/components/ui/layout";
import { TopBar } from "@/components/ui/navigations";
import { BottomSheet, BottomSheetRef } from "@/components/ui/overlay";
import { Typography } from "@/components/ui/typography";
import { useTheme, useTranslation } from "@/hooks";
import { useRouter } from "expo-router";
import { useRef } from "react";
import { View } from "react-native";
import styles from "./verificationScreenStyles";

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
        renderTopBar={() => (
          <TopBar title={t("auth_verificationTitle")} goBack />
        )}
      >
        <StatusHalo variant="info" icon="mail-opened" />
        <View style={styles.infoContainer}>
          <Typography
            textAlign="center"
            variant="largeBold"
            color={colors.foreground.primary}
            style={styles.infoContainerHeader}
          >
            {t("auth_verificationSub")}
          </Typography>
          <Typography
            textAlign="center"
            variant="smallRegular"
            color={colors.foreground.tertiary}
          >
            {t("auth_verificationDesc")}
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
          <Typography
            variant="smallRegular"
            color={colors.foreground.secondary}
          >
            {t("auth_verificationDidntReceive")}
          </Typography>
          <Button
            variant="link"
            size="sm"
            onPress={() => console.log("Resend OTP")}
            title={t("auth_verificationResend")}
            style={styles.resendButton}
          />
        </View>
        <Button
          style={styles.submitButton}
          variant="primary"
          onPress={() => changePasswordSheetRef.current?.present()}
          title={t("auth_verificationSubmit")}
        />
      </ScreenLayout>
      {/* Change Password Bottom Sheet */}
      <BottomSheet
        ref={changePasswordSheetRef}
        bottomSheetProps={{
          snapPoints: ["50%"],
          enablePanDownToClose: false,
        }}
        title={t("auth_newPasswordTitle")}
        description={t("auth_newPasswordSub")}
      >
        <BottomSheet.Content style={styles.bottomSheetContent}>
          <TextInput
            type="password"
            label={t("auth_fieldNewPassword")}
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
              changePasswordSheetRef.current?.dismiss();
              router.replace("/changePassword");
            }}
            title={t("auth_changePasswordTitle")}
          />
        </BottomSheet.Content>
      </BottomSheet>
    </>
  );
};

export default VerificationScreen;
