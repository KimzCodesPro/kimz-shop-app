import { StyleProp, ViewStyle } from "react-native";

export type ColorOption = {
  name: string; // e.g. "Black", also used as the id
  code: string; // e.g. "#000000"
};

export type ColorSwitcherProps = {
  // name of the selected color, must match one of colorPalette's names
  selectedColor: string;
  colorPalette: ColorOption[];
  onColorChange: (colorName: string) => void;
  style?: StyleProp<ViewStyle>;
};
