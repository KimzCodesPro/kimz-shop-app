import Icon from "@/components/icons";
import { Typography } from "@/components/ui/display";
import { useTheme, useTranslation, useUserPreferences } from "@/hooks";
import { Pressable, StyleSheet, View } from "react-native";

export default function Index() {
  const { t, language } = useTranslation();
  const color = useTheme();
  const { setLanguage, setTheme } = useUserPreferences();

  return (
    <View style={styles.container}>
      <Icon name="chevron" size={24} color={color.primary.base} isRTL />
      <Typography
        variant="heroBold"
        language={language}
        color={color.success.tint}
      >
        {t("hello")}
      </Typography>
      <View style={styles.buttons}>
        <Pressable style={styles.button} onPress={() => setLanguage("en")}>
          <Typography variant="normalBold" language="en">
            English
          </Typography>
        </Pressable>
        <Pressable style={styles.button} onPress={() => setLanguage("ar")}>
          <Typography variant="normalBold" language="ar">
            العربية
          </Typography>
        </Pressable>
      </View>
      <View style={styles.buttons}>
        <Pressable style={styles.button} onPress={() => setTheme("light")}>
          <Typography variant="normalBold" language={language}>
            light
          </Typography>
        </Pressable>
        <Pressable style={styles.button} onPress={() => setTheme("dark")}>
          <Typography variant="normalBold" language={language}>
            dark
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
    justifyContent: "center",
    alignItems: "center",
  },
});
