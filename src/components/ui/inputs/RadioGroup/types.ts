export type RadioGroupProps = {
  options: { label: string; value: string }[];
  selectedValue: string;
  onValueChange: (value: string) => void;
};
