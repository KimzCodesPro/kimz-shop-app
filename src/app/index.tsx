import { Typography } from "@/components/ui/display";
import { useTheme, useUserPreferences } from "@/hooks";
import { useState } from "react";
import { Keyboard, Pressable, StyleSheet, View } from "react-native";
import { Dropdown, TextInput } from "../components/ui/inputs";

const cities = [
  { label: "Cairo", value: "cairo" },
  { label: "Alexandria", value: "alexandria" },
  { label: "Giza", value: "giza" },
  { label: "Shubra El Kheima", value: "shubra-el-kheima" },
  { label: "Port Said", value: "port-said" },
  { label: "Suez", value: "suez" },
  { label: "Luxor", value: "luxor" },
  { label: "Mansoura", value: "mansoura" },
  { label: "El Mahalla El Kubra", value: "el-mahalla-el-kubra" },
  { label: "Tanta", value: "tanta" },
  { label: "Asyut", value: "asyut" },
  { label: "Ismailia", value: "ismailia" },
  { label: "Fayyum", value: "fayyum" },
  { label: "Zagazig", value: "zagazig" },
  { label: "Aswan", value: "aswan" },
  { label: "Damietta", value: "damietta" },
  { label: "Damanhur", value: "damanhur" },
  { label: "Minya", value: "minya" },
  { label: "Beni Suef", value: "beni-suef" },
  { label: "Qena", value: "qena" },
  { label: "Sohag", value: "sohag" },
  { label: "Hurghada", value: "hurghada" },
  { label: "Banha", value: "banha" },
  { label: "Kafr El Sheikh", value: "kafr-el-sheikh" },
  { label: "Arish", value: "arish" },
  { label: "Mallawi", value: "mallawi" },
  { label: "10th of Ramadan City", value: "10th-of-ramadan" },
  { label: "Bilbeis", value: "bilbeis" },
  { label: "Marsa Matruh", value: "marsa-matruh" },
];

export default function Index() {
  const color = useTheme();
  const { setLanguage, setTheme } = useUserPreferences();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  return (
    <Pressable
      onPress={Keyboard.dismiss}
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
      <TextInput
        type="text"
        label="email "
        placeHolder="inster email"
        iconName="mail"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Dropdown
        label="city"
        placeHolder="select city"
        iconName="map-pin"
        options={cities}
        value={city}
        onSelect={setCity}
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
    </Pressable>
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
