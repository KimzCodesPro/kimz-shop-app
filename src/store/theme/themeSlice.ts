import { createSlice } from "@reduxjs/toolkit";
import colors from "./colors.json";
import { ThemeColors } from "../../types/theme";

const initialState: ThemeColors = colors;

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {},
});

export default themeSlice.reducer;
