import { Typography } from "@/components/ui/display";
import { Button } from "@/components/ui/inputs";
import { Modal } from "@/components/ui/overlay";
import { useTheme, useUserPreferences } from "@/hooks";
import { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
export default function Index() {
  const color = useTheme();
  const { setLanguage, setTheme } = useUserPreferences();
  const [modalStatus, setModalStatus] = useState(false);
  return (
    <View
      style={[styles.container, { backgroundColor: color.background.base }]}
    >
      <Modal
        modalStatus={modalStatus}
        closeModal={() => setModalStatus(false)}
        title="Modal Title"
        description="This is a modal description. It can be used to provide additional information or context to the user."
      >
        <View style={styles.modalContent}>
          <Button
            title="Confirm"
            onPress={() => {}}
            variant="primary"
            size="lg"
          />
          <Button
            title="Cancel"
            onPress={() => {}}
            variant="danger"
            size="lg"
          />
        </View>
      </Modal>
      <Pressable
        style={[styles.button, { borderColor: color.border.default }]}
        onPress={() => setModalStatus(true)}
      >
        <Typography variant="normalBold">Open Modal</Typography>
      </Pressable>
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
  modalContent: {
    gap: 3,
  },
});
