export type ToastType = "success" | "warning" | "danger" | "info";

export type ToastPayload = {
  type: ToastType;
  title: string;
  description: string;
  duration?: number; // in milliseconds, defaults to TOASTER_DEFAULT_DURATION
};

export type Toast = ToastPayload & {
  id: string;
};
