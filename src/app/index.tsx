import { Typography } from "@/components/ui/display";
import { StyleSheet, View } from "react-native";
export default function Index() {
  return (
    <View style={styles.container}>
      <Typography variant="heroBold" language="ar">
        كلام عربي
      </Typography>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
