export const orderStatusLabel = {
  onProgress: "orders_statusOnProgress",
  completed: "orders_statusCompleted",
  cancelled: "orders_statusCancelled",
} as const;

export const orderStatusColor = {
  onProgress: "info",
  completed: "success",
  cancelled: "danger",
} as const;
