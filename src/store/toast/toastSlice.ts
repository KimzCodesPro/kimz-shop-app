import { Toast, ToastPayload } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialStateType = {
  toasts: Toast[];
};

const initialState: InitialStateType = {
  toasts: [
    {
      id: "1",
      type: "success",
      title: "Success!",
      description: "Your action was successful.",
    },
    {
      id: "2",
      type: "warning",
      title: "Warning!",
      description: "Please check your information.",
    },
    {
      id: "3",
      type: "danger",
      title: "Error!",
      description: "Something went wrong.",
    },
    {
      id: "4",
      type: "info",
      title: "Info",
      description: "Here is some useful information.",
    },
  ],
};

const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    showToast: (state, action: PayloadAction<ToastPayload>) => {
      state.toasts.push({ id: Date.now().toString(), ...action.payload });
    },
    hideToast: (state, action: PayloadAction<string>) => {
      state.toasts = state.toasts.filter(
        (toast) => toast.id !== action.payload,
      );
    },
  },
});

export const { showToast, hideToast } = toastSlice.actions;

export default toastSlice.reducer;
