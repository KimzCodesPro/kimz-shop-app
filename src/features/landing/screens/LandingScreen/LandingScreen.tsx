import { Button } from "@/src/components/ui/inputs";
import { ScreenLayout } from "@/src/components/ui/layout";
import { router } from "expo-router";
import { View } from "react-native";
import { Carousel } from "./components";
import { LANDING_SLIDES } from "./constants";
import styles from "./LandingScreenStyle";

const LandingScreen = () => {
  return (
    <ScreenLayout contentContainerStyle={styles.contentContainer}>
      <Carousel data={LANDING_SLIDES} />
      <View style={styles.actions}>
        <Button
          title="Create Account"
          onPress={() => router.replace("/createAccount")}
        />
        <Button
          style={styles.linkButton}
          title="Already Have an Account"
          variant="link"
          onPress={() => router.replace("/login")}
        />
      </View>
    </ScreenLayout>
  );
};

export default LandingScreen;
