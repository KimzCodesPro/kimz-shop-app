import { IconName } from "@/components/icons";
import { InputBaseProps } from "../shared/types";

export type DropdownOption = {
  label: string;
  value: string;
};

export type DropdownProps = {
  iconName: IconName;
  options: DropdownOption[];
  onSelect: (value: string) => void;
} & InputBaseProps;
