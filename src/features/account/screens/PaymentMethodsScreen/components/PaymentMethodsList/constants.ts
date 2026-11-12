// status color + translation key for each supported card brand
const CARD_TYPE_CONFIG = {
  visa: { color: "info", label: "common_paymentVisa" },
  mastercard: { color: "warning", label: "common_paymentMastercard" },
} as const;

export { CARD_TYPE_CONFIG };
