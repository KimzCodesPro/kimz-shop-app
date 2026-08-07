export type SwitchGroupProps = {
  options: { label: string; value: string }[];
  // Switches are independent, so the group tracks every value that is on and
  // onValueChange reports the one that was toggled.
  selectedValues: string[];
  onValueChange: (value: string) => void;
};
