import { StyleProp, ViewStyle } from "react-native";

type ListItem = {
  id: string | number;
  title: string;
  description: string;
};

export type AccordionProps = {
  items: ListItem[];
  style?: StyleProp<ViewStyle>;
};
