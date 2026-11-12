import { Href } from "expo-router";
import { StyleProp, ViewStyle } from "react-native";

export type SectionTitleProps = {
  title: string;
  actionText: string;
  seeAllLink: Href;
  style?: StyleProp<ViewStyle>;
};
