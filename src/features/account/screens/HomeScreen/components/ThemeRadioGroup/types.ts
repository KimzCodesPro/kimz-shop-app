import { Theme } from "@/types";
import { ImageProps } from "expo-image";

export type ThemeOption = {
  label: string;
  value: Theme;
  // Preview artwork for the option — a phone mock of what the theme looks like.
  image: ImageProps["source"];
  disabled?: boolean;
};

export type ThemeRadioGroupProps = {
  options: ThemeOption[];
  selectedValue: Theme;
  onValueChange: (value: Theme) => void;
};
