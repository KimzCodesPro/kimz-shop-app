import { useTranslation } from "@/hooks";
import { ScreenLayout } from "@/src/components/ui/layout";
import { TopBar } from "@/src/components/ui/navigations";
import { Text } from "react-native";

const VerificationScreen = () => {
  const { t } = useTranslation();
  return (
    <ScreenLayout
      dismissKeyboardOnTap
      renderTopBar={() => <TopBar title={t("auth_verification")} goBack />}
    >
      <Text>Verification Screen</Text>
    </ScreenLayout>
  );
};

export default VerificationScreen;
