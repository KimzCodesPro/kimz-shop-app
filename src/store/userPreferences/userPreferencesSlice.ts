import { Language, Theme } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialStateType = {
  language: Language;
  theme: Theme;
};

const initialState: InitialStateType = {
  language: "en",
  theme: "light",
};

const userPreferencesSlice = createSlice({
  name: "userPreferences",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<Language>) => {
      state.language = action.payload;
    },
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
    },
  },
});

export const { setLanguage, setTheme } = userPreferencesSlice.actions;

export default userPreferencesSlice.reducer;
