import { StyleProp, ViewStyle } from "react-native";

export type SwitchProps = {
  enabled: boolean;
  // Applied to the track, so a caller can nudge the control's own placement.
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
};
