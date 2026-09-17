import { useTranslation } from "@/hooks";
import { Button } from "@/src/components/ui/inputs";
import { ScreenLayout } from "@/src/components/ui/layout";
import { router } from "expo-router";
import { View } from "react-native";
import { Carousel } from "./components";
import { LANDING_SLIDES } from "./constants";
import styles from "./LandingScreenStyle";

const LandingScreen = () => {
  const { t } = useTranslation();

  const slides = LANDING_SLIDES.map((slide) => ({
    ...slide,
    title: t(slide.title),
    description: t(slide.description),
  }));

  return (
    <ScreenLayout contentContainerStyle={styles.contentContainer}>
      <Carousel data={slides} />
      <View style={styles.actions}>
        <Button
          title={t("onBoarding_createAccountButton")}
          onPress={() => router.replace("/createAccount")}
        />
        <Button
          style={styles.linkButton}
          title={t("onBoarding_alreadyHaveAccount")}
          variant="link"
          onPress={() => router.replace("/loginAccount")}
        />
      </View>
    </ScreenLayout>
  );
};

export default LandingScreen;
