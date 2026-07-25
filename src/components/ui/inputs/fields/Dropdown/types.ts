import { IconName } from "@/components/icons";
import { StyleProp, ViewStyle } from "react-native";
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

export type DropdownListProps = {
  options: DropdownOption[];
  value: string;
  onSelect: (value: string) => void;
  styles: {
    option: StyleProp<ViewStyle>;
  };
};
