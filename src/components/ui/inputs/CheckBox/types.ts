import { StyleProp, ViewStyle } from "react-native";

export type CheckBoxProps = {
  isChecked: boolean;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
};
