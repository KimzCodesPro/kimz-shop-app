import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const LandingPage = () => {
  return (
    <View style={styles.container}>
      <Link href="/account">
        <Text>go index</Text>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default LandingPage;
