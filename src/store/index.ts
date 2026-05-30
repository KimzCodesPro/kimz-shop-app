import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import devToolsEnhancer from "redux-devtools-expo-dev-plugin";

import themeReducer from "./theme/themeSlice";
import translation from "./translation/translationSlice";
import userPreferancesReducer from "./userPreferences/userPreferencesSlice";

const rootReducer = combineReducers({
  theme: themeReducer,
  translation: translation,
  userPreferences: userPreferancesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: false,
  enhancers: (getDefaultEnhancers) =>
    getDefaultEnhancers().concat(devToolsEnhancer()),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
