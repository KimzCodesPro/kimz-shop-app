import { BottomSheetRef } from "@/components/ui/overlay";
import { useTheme, useTranslation } from "@/hooks";
import { useRouter } from "expo-router";
import { useRef } from "react";

const useVerificationScreen = () => {
  const { t } = useTranslation();
  const colors = useTheme();
  const router = useRouter();

  const changePasswordSheetRef = useRef<BottomSheetRef | null>(null);

  // TODO: replace the logs once OTP verification is wired up
  const otpFocusHandler = () => console.log("Focused");
  const otpBlurHandler = () => console.log("Blurred");
  const otpChangeHandler = (text: string) => console.log(text);
  const otpFilledHandler = (text: string) => console.log(`OTP is ${text}`);
  const resendCodeHandler = () => console.log("Resend OTP");

  const openChangePasswordSheetHandler = () => {
    changePasswordSheetRef.current?.present();
  };

  const changePasswordHandler = () => {
    changePasswordSheetRef.current?.dismiss();
    router.replace("/changePassword");
  };

  return {
    t,
    colors,
    changePasswordSheetRef,
    otpFocusHandler,
    otpBlurHandler,
    otpChangeHandler,
    otpFilledHandler,
    resendCodeHandler,
    openChangePasswordSheetHandler,
    changePasswordHandler,
  };
};

export default useVerificationScreen;
