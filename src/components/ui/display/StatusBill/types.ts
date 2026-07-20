import { IconName } from "@/components/icons";
import { StatusVariant } from "@/types";

export type StatusBillVariant = "filled" | "outlined";

export type StatusBillProps = {
  iconName?: IconName;
  variant?: StatusBillVariant;
  label: string;
  color: StatusVariant;
};
