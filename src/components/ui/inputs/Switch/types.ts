import { StyleProp, ViewStyle } from "react-native";

export type SwitchProps = {
  isSelected: boolean;
  onChange: () => void;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
  title: string;
};
