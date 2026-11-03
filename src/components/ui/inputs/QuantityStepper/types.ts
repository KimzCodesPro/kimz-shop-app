export type QuantityStepperSize = "sm" | "md" | "lg";

export type QuantityStepperProps = {
  size?: QuantityStepperSize;
  limit?: number;
  currentQuantity?: (quantity: number) => void;
};
