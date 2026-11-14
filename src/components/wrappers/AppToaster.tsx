import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import { ToasterList } from "../ui/feedback";

type AppToasterProps = {
  children: ReactNode;
};

const AppToaster = ({ children }: AppToasterProps) => {
  return (
    <View style={styles.container}>
      <ToasterList />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AppToaster;
