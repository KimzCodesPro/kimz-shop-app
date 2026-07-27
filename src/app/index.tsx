import { Typography } from "@/components/ui/display";
import { BottomSheet, BottomSheetRef } from "@/components/ui/overlay";
import { useTheme, useUserPreferences } from "@/hooks";
import { useRef, useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { Dropdown, TextInput } from "../components/ui/inputs";
import { DismissKeyboard } from "../components/ui/layout";

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
  const testSheetRef = useRef<BottomSheetRef>(null);
  // Non-modal BottomSheet is always mounted, so snapToIndex works directly.
  const openSheetAt = (index: number) => {
    testSheetRef.current?.snapToIndex(index);
  };
  return (
    <DismissKeyboard
      style={[styles.container, { backgroundColor: color.background.base }]}
    >
      <TextInput
        type="text"
        label="user name"
        placeholder="inster username"
        iconName="mail"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        type="text"
        label="email"
        placeholder="inster email"
        iconName="mail"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Dropdown
        label="city"
        placeholder="select city"
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

      <View style={styles.buttons}>
        <Pressable style={styles.button} onPress={() => openSheetAt(0)}>
          <Typography variant="normalBold">open 25%</Typography>
        </Pressable>
        <Pressable style={styles.button} onPress={() => openSheetAt(1)}>
          <Typography variant="normalBold">open 50%</Typography>
        </Pressable>
        <Pressable style={styles.button} onPress={() => openSheetAt(2)}>
          <Typography variant="normalBold">open 90%</Typography>
        </Pressable>
      </View>

      <BottomSheet
        ref={testSheetRef}
        title="test content"
        description="drag the handle between the 25% / 50% / 90% snap points"
        bottomSheetProps={{ snapPoints: ["25%", "50%", "90%"] }}
      >
        <BottomSheet.Content style={styles.modalContent}>
          <Typography variant="normalBold">First block</Typography>
          <Typography variant="smallRegular" color={color.foreground.secondary}>
            This is a plain View content slot. Because enableDynamicSizing is
            false and the height comes from the fixed snap points, it lays out
            fine without BottomSheetView.
          </Typography>
          <Typography variant="normalBold">Second block</Typography>
          <Typography variant="smallRegular" color={color.foreground.secondary}>
            Notice the left/right padding and the gap under the title are
            respected — the flex layout is not overridden.
          </Typography>
          <Typography variant="normalBold">Third block</Typography>
          <Typography variant="smallRegular" color={color.foreground.secondary}>
            Drag up to the 90% snap point to see more of this content. Since
            Content does not scroll, anything past the sheet height is clipped.
          </Typography>
        </BottomSheet.Content>
      </BottomSheet>
    </DismissKeyboard>
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
