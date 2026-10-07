import { useTranslation } from "@/hooks";
import { Carousel } from "@/components/ui/display";
import { Button } from "@/components/ui/inputs";
import { ScreenLayout } from "@/components/ui/layout";
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
    <ScreenLayout contentContainerStyle={styles.contentContainer}>
      <Carousel
        autoplay={true}
        autoplayInterval={4000}
        data={slides}
        height={540}
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
