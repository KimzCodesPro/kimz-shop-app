export const orderStatusColor = {
  onProgress: "info",
  completed: "success",
  cancelled: "danger",
} as const;

export const orderStatusLabel = {
  onProgress: "myOrder_statusOnProgress",
  completed: "myOrder_statusCompleted",
  cancelled: "myOrder_statusCancelled",
} as const;
