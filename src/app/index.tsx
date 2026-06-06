import Icon from "@/components/icons";
import { Typography } from "@/components/ui/display";
import { Button, TextInput } from "@/components/ui/inputs";
import { useTheme, useTranslation, useUserPreferences } from "@/hooks";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const { t } = useTranslation();
  const color = useTheme();
  const { setLanguage, setTheme } = useUserPreferences();
  const [inc, setInc] = useState(0);

  const handlePress = () => {
    setInc((prev) => prev + 1);
  };

  return (
    <View
      style={[styles.container, { backgroundColor: color.background.base }]}
    >
      <Text>{inc}</Text>
      <TextInput
        label="Email Address"
        icon="mail"
        placeholder="Enter your email address"
        errorMessage="Invalid email address"
      />
      <TextInput
        label="Password"
        icon="lock"
        placeholder="Enter your password"
      />
      <Button title="Login" onPress={handlePress} size="lg" variant="primary" />
      <Icon name="chevron" size={24} color={color.primary.base} isRTL />
      <Typography variant="heroBold" color={color.success.tint}>
        {t("hello")}
      </Typography>
      <View style={styles.buttons}>
        <Pressable style={styles.button} onPress={() => setLanguage("en")}>
          <Typography variant="normalBold">English</Typography>
        </Pressable>
        <Pressable style={styles.button} onPress={() => setLanguage("ar")}>
          <Typography variant="normalBold">العربية</Typography>
        </Pressable>
      </View>
      <View style={styles.buttons}>
        <Pressable style={styles.button} onPress={() => setTheme("light")}>
          <Typography variant="normalBold">light</Typography>
        </Pressable>
        <Pressable style={styles.button} onPress={() => setTheme("dark")}>
          <Typography variant="normalBold">dark</Typography>
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
