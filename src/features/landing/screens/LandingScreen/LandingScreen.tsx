import { Button } from "@/src/components/ui/inputs";
import { ScreenLayout } from "@/src/components/ui/layout";
import { spacing } from "@/src/constants";
import { StyleSheet, View } from "react-native";
import { Carousel } from "./components";
import { LANDING_SLIDES } from "./constants";

const LandingScreen = () => {
  return (
    <ScreenLayout>
      <Carousel data={LANDING_SLIDES} />
      <View style={styles.actions}>
        <Button title="Create Account" onPress={() => {}} />
        <Button
          title="Already Have an Account"
          variant="link"
          onPress={() => {}}
        />
      </View>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  // marginTop: auto eats the leftover space above the pair, pinning it to the
  // bottom of the screen however tall the carousel ends up.
  actions: {
    marginTop: "auto",
    gap: spacing.space8.height,
  },
});

export default LandingScreen;
