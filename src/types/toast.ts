export type ToastType =
  "success" | "warning" | "danger" | "info";

export type ToastPayload = {
  type: ToastType;
  title: string;
  description: string;
};

export type Toast = ToastPayload & {
  id: string;
};
