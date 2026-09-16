import { useTranslation } from "@/hooks";
import { StatusHalo } from "@/src/components/ui/feedback";
import { ScreenLayout } from "@/src/components/ui/layout";
import { TopBar } from "@/src/components/ui/navigations";
import { OtpCodeInput } from "./components";

const VerificationScreen = () => {
  const { t } = useTranslation();

  return (
    <ScreenLayout
      dismissKeyboardOnTap
      renderTopBar={() => <TopBar title={t("auth_verification")} goBack />}
    >
      <StatusHalo variant="info" icon="mail" />
      <OtpCodeInput
        onFocus={() => console.log("Focused")}
        onBlur={() => console.log("Blurred")}
        onTextChange={(text) => console.log(text)}
        onFilled={(text) => console.log(`OTP is ${text}`)}
      />
    </ScreenLayout>
  );
};

export default VerificationScreen;
