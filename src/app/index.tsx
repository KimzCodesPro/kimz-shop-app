import { Typography } from "@/components/ui/display";
import { useTranslation } from "@/hooks";
import { useAppDispatch } from "@/store/hooks";
import { setLanguage } from "@/store/userPreferences/userPreferencesSlice";
import { Pressable, StyleSheet, View } from "react-native";
export default function Index() {
  const { t, language } = useTranslation();
  const dispatch = useAppDispatch();
  return (
    <View style={styles.container}>
      <Typography variant="heroBold" language={language}>
        {t("hello")}
      </Typography>
      <View style={styles.buttons}>
        <Pressable
          style={styles.button}
          onPress={() => dispatch(setLanguage("en"))}
        >
          <Typography variant="normalBold" language="en">
            English
          </Typography>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => dispatch(setLanguage("ar"))}
        >
          <Typography variant="normalBold" language="ar">
            العربية
          </Typography>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 24,
  },
  buttons: {
    flexDirection: "row",
    gap: 12,
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
});
