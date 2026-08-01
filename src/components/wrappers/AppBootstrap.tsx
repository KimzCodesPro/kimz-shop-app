import { persistor, store } from "@/src/store";
import { PortalProvider } from "@gorhom/portal";
import { Stack } from "expo-router";
import { StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const AppBootstrap = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <PortalProvider>
            <Stack>
              <Stack.Screen name="(main)" options={{ headerShown: false }} />
            </Stack>
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
