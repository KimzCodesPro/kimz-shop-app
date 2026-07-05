import { AddressCard, Typography } from "@/components/ui/display";
import { CheckBox, TextInput } from "@/components/ui/inputs";
import { RowNav } from "@/components/ui/navigations";
import { useTheme, useUserPreferences } from "@/hooks";
import { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";

export default function Index() {
  const [name, setName] = useState("");
  const color = useTheme();
  const { setLanguage, setTheme } = useUserPreferences();

  return (
    <View
      style={[styles.container, { backgroundColor: color.background.base }]}
    >
      <CheckBox isChecked={false} onChange={() => {}} />
      <TextInput
        type="text"
        label="Name"
        placeholder="Insert name"
        icon="user"
        onChange={(text) => setName(text)}
        value={name}
        clearInput={() => setName("")}
        errorMessage="field is required"
      />
      <AddressCard
        title="Home Address"
        description="123 Main St, City, Country"
        type="apartment"
        onPress={() => console.log("AddressCard pressed")}
      />
      <RowNav
        variant="default"
        title="Profile"
        icon="user"
        trailing="noChevron"
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
