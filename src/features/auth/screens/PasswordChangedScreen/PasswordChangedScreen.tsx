import { useTheme, useTranslation } from "@/hooks";
import { StatusHalo } from "@/src/components/ui/feedback";
import { Button } from "@/src/components/ui/inputs";
import { ScreenLayout } from "@/src/components/ui/layout";
import { Typography } from "@/src/components/ui/typography";
import { View } from "react-native";
import styles from "./PasswordChangedScreenStyles";

const PasswordChangedScreen = () => {
  const colors = useTheme();
  const { t } = useTranslation();

  return (
    <ScreenLayout horizontalCenterAlignment verticalCenterAlignment>
      <StatusHalo variant="success" icon="check" />
      <View style={styles.containerInfo}>
        <Typography
          variant="largeBold"
          textAlign="center"
          color={colors.foreground.primary}
        >
          Password Changed!
        </Typography>
        <Typography
          variant="smallRegular"
          textAlign="center"
          color={colors.foreground.tertiary}
        >
          Your password has been updated. Use your new password to sign in next
          time.
        </Typography>
      </View>

      <Button
        style={styles.continueButton}
        variant="primary"
        title={t("common_continue")}
        onPress={() => {}}
      />
    </ScreenLayout>
  );
};

export default PasswordChangedScreen;
