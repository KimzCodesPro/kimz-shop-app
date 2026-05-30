import { Language, Theme } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

type InitialStateType = {
  language: Language;
  theme: Theme;
};

const initialState: InitialStateType = {
  language: "ar",
  theme: "light",
};

const userPreferencesSlice = createSlice({
  name: "userPreferences",
  initialState,
  reducers: {},
});

export default userPreferencesSlice.reducer;
