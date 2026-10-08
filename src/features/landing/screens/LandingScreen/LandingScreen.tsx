import { Carousel } from "@/components/ui/display";
import { Button, LanguageSwitcher } from "@/components/ui/inputs";
import { ScreenLayout } from "@/components/ui/layout";
import { useTranslation } from "@/hooks";
import { router } from "expo-router";
import { View } from "react-native";
import { CarouselItem } from "../components";
import { LANDING_SLIDES } from "./data";
import styles from "./LandingScreenStyle";

const LandingScreen = () => {
  const { t } = useTranslation();

  const slides = LANDING_SLIDES.map((slide) => ({
    ...slide,
    title: t(slide.title),
    description: t(slide.description),
  }));

  return (
    <ScreenLayout contentContainerStyle={styles.container}>
      <LanguageSwitcher style={styles.languageSwitcher} />
      <Carousel
        style={styles.carousel}
        autoplay={true}
        autoplayInterval={4000}
        data={slides}
        height={510}
        paginationDotType="pill"
        renderItem={(item) => <CarouselItem item={item} />}
      />
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
