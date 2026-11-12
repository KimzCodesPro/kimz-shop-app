import { BottomSheetRef } from "@/components/ui/overlay";
import { useTheme, useTranslation } from "@/hooks";
import { useRouter } from "expo-router";
import { useRef } from "react";

const useLoginScreen = () => {
  const { t } = useTranslation();
  const colors = useTheme();
  const router = useRouter();

  const forgotPasswordBottomSheetRef = useRef<BottomSheetRef | null>(null);

  const openForgotPasswordSheetHandler = () => {
    forgotPasswordBottomSheetRef.current?.present();
  };

  const sendCodeHandler = () => {
    forgotPasswordBottomSheetRef.current?.dismiss();
    router.push("/verification");
  };

  const createAccountHandler = () => {
    router.push("/createAccount");
  };

  return {
    t,
    colors,
    forgotPasswordBottomSheetRef,
    openForgotPasswordSheetHandler,
    sendCodeHandler,
    createAccountHandler,
  };
};

export default useLoginScreen;
