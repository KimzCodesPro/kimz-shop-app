import Constants from "expo-constants";

// app.json → expo.extra.forcesRTL. `extra` is free-form data that Expo itself
// never reads, so this key means only what we make it mean here: pin the app to
// RTL whatever language is selected. It is the way to exercise mirrored layout
// without switching the device to Arabic, and it is read at module scope
// because app config is fixed for the lifetime of the build.
const forcesRTL = Constants.expoConfig?.extra?.forcesRTL === true;

export default forcesRTL;
