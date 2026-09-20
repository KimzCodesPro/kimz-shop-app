import { StyleProp, ViewStyle } from "react-native";

export type SectionTitleProps = {
  title: string;
  actionText: string;
  onActionPress: () => void;
  style?: StyleProp<ViewStyle>;
};
