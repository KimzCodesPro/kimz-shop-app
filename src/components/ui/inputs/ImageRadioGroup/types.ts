
export type ImageRadioGroupOption = {
  label: string;
  value: string;
  // Preview artwork for the option — e.g. a phone mock of what the theme looks like.
  image: string;
  disabled?: boolean;
};

export type ImageRadioGroupProps = {
  options: ImageRadioGroupOption[];
  selectedValue: string;
  onValueChange: (value: string) => void;
};
