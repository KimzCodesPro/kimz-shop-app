import { createMigrate, MigrationManifest } from "redux-persist";

const userPreferences: MigrationManifest = {
  0: (state) => {
    // baseline shape: { language, theme }
    return state;
  },
};

const userPreferencesMigrations = createMigrate(userPreferences, {
  debug: __DEV__,
});

export { userPreferencesMigrations };
