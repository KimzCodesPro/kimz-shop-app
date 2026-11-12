export type QuantityStepperSize = "sm" | "md" | "lg";

export type QuantityStepperProps = {
  size?: QuantityStepperSize;
  limit?: number;
  startQuantity: number;
  currentQuantity: (quantity: number) => void;
};
