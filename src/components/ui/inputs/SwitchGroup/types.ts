export type SwitchGroupOption = {
  label: string;
  value: string;
  isSelected: boolean;
};
export type SwitchGroupProps = {
  options: SwitchGroupOption[];
  // Switches are independent, so each option carries its own state and
  // onValueChange reports the value that was toggled.
  onValueChange: (value: string) => void;
};
