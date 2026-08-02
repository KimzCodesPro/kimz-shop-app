import { persistor, store } from "@/src/store";
import { PortalProvider } from "@gorhom/portal";
import { StyleSheet } from "react-native";
import RootLayout from "./RootLayout";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const AppBootstrap = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <PortalProvider>
            <RootLayout />
          </PortalProvider>
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AppBootstrap;
