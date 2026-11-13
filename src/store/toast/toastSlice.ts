import { ToastPayload, ToastType } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialStateType = {
  isVisible: boolean;
  type: ToastType;
  title: string;
  description?: string;
};

const initialState: InitialStateType = {
  isVisible: false,
  type: "info",
  title: "",
  description: undefined,
};

const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    showToast: (state, action: PayloadAction<ToastPayload>) => {
      state.isVisible = true;
      state.type = action.payload.type;
      state.title = action.payload.title;
      state.description = action.payload.description;
    },
    hideToast: (state) => {
      state.isVisible = false;
    },
  },
});

export const { showToast, hideToast } = toastSlice.actions;

export default toastSlice.reducer;
