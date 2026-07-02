import { Typography } from "@/components/ui/display";
import { BottomSheet, type BottomSheetRef } from "@/components/ui/overlay";
import { useTheme, useUserPreferences } from "@/hooks";
import { useRef } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const bottomSheetRef = useRef<BottomSheetRef>(null);

  const color = useTheme();
  const { setLanguage, setTheme } = useUserPreferences();
  return (
    <View
      style={[styles.container, { backgroundColor: color.background.base }]}
    >
      <Pressable
        style={styles.button}
        onPress={() => bottomSheetRef.current?.snapToIndex(0)}
      >
        <Typography variant="normalBold">Open Bottom 1</Typography>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => bottomSheetRef.current?.snapToIndex(1)}
      >
        <Typography variant="normalBold">Open Bottom 2</Typography>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => bottomSheetRef.current?.snapToIndex(2)}
      >
        <Typography variant="normalBold">Open Bottom 3</Typography>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => bottomSheetRef.current?.snapToIndex(3)}
      >
        <Typography variant="normalBold">Open Bottom 4</Typography>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => bottomSheetRef.current?.close()}
      >
        <Typography variant="normalBold">Close Bottom Sheet</Typography>
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
      <BottomSheet
        ref={bottomSheetRef}
        bottomSheetProps={{
          snapPoints: ["25%", "50%"],
          index: -1,
          children: (
            <View>
              <Text>Hello Word</Text>
            </View>
          ),
        }}
        title="Bottom Sheet"
        description="This is description"
      />
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
