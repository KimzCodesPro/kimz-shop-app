import { Typography } from "@/components/ui/display";
import { useTheme, useUserPreferences } from "@/hooks";
import { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { TextInput } from "../components/ui/inputs";

export default function Index() {
  const color = useTheme();
  const { setLanguage, setTheme } = useUserPreferences();
  const [name, setName] = useState("");
  return (
    <View
      style={[styles.container, { backgroundColor: color.background.base }]}
    >
      <TextInput
        type="text"
        label="user name"
        placeHolder="inster username"
        iconName="mail"
        value={name}
        onChangeText={(text) => setName(text)}
      />
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
    padding: 24,
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
  modalContent: {
    gap: 3,
  },
});
