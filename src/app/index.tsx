import { personTest } from "@/assets/images";
import { Typography, UserGreeting } from "@/components/ui/display";
import { useTheme, useUserPreferences } from "@/hooks";
import { Pressable, StyleSheet, View } from "react-native";
export default function Index() {
  const color = useTheme();
  const { setLanguage, setTheme } = useUserPreferences();

  return (
    <View
      style={[styles.container, { backgroundColor: color.background.base }]}
    >
      <UserGreeting
        imgSrc={personTest}
        size="sm"
        userName="kareem nour"
        meta="hello word"
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
