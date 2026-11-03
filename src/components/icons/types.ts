import { ColorValue, StyleProp, ViewStyle } from "react-native";
import { ICON_SIZES } from "./constants";
import iconMap from "./components/iconMap";

export type IconName = keyof typeof iconMap;

export type IconSize = keyof typeof ICON_SIZES;

// What each glyph in iconMap receives: a raw number, resolved by Icon.
export type IconBase = {
  size?: number;
  color?: ColorValue;
  style?: StyleProp<ViewStyle>;
};

export type IconProps = {
  name: IconName;
  size?: IconSize;
  flipOnRTL?: boolean;
} & Omit<IconBase, "size">;
