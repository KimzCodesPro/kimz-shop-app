import { Button } from "@/src/components/ui/inputs";
import { ScreenLayout } from "@/src/components/ui/layout";
import { spacing } from "@/src/constants";
import { StyleSheet, View } from "react-native";
import { Carousel } from "./components";
import { LANDING_SLIDES } from "./constants";

const LandingScreen = () => {
  return (
    <ScreenLayout contentContainerStyle={styles.contentContainer}>
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
  contentContainer: {
    paddingTop: spacing.space16.height,
  },

  actions: {
    marginTop: "auto",
    gap: spacing.space8.height,
  },
});

export default LandingScreen;
