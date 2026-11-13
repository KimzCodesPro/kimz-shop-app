export type ToastType =
  "success" | "warning" | "danger" | "info" | "notification";

export type ToastPayload = {
  type: ToastType;
  title: string;
  description?: string;
};
