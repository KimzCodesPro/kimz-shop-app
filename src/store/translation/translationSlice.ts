import { createSlice } from "@reduxjs/toolkit";
import translation from "./translation.json";

type InitialStateType = typeof translation;

const initialState: InitialStateType = translation;

const translationSlice = createSlice({
  name: "translation",
  initialState,
  reducers: {},
});

export default translationSlice.reducer;
