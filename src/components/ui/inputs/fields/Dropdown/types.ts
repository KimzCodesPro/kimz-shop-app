import { IconName } from "@/components/icons";
import { StyleProp, ViewStyle } from "react-native";
import { FieldProps } from "../shared/types";

export type DropdownOption = {
  label: string;
  value: string;
};

export type DropdownProps = {
  icon: IconName;
  options: DropdownOption[];
  onSelect: (value: string) => void;
  // Falls back to `label` when omitted — most dropdowns want the same text
  // in the field and the sheet that opens under it.
  sheetTitle?: string;
} & FieldProps;

export type DropdownListProps = {
  options: DropdownOption[];
  value: string;
  onSelect: (value: string) => void;
  styles: {
    option: StyleProp<ViewStyle>;
  };
};
