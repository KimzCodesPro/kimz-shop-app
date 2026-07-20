import { StyleProp, ViewStyle } from "react-native";

export type SwitchProps = {
  value: boolean;
  onChange: () => void;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
};
