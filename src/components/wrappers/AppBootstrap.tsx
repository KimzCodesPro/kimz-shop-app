import { persistor, store } from "@/src/store";
import { PortalProvider } from "@gorhom/portal";
import { StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import RootLayout from "./RootLayout";

const AppBootstrap = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* GestureHandlerRootView must stay above PortalProvider: portaled
            content (bottom sheets) needs a gesture root ancestor where it
            actually mounts, which is the portal host. */}
        <GestureHandlerRootView style={styles.container}>
          <PortalProvider>
            <RootLayout />
          </PortalProvider>
        </GestureHandlerRootView>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AppBootstrap;
