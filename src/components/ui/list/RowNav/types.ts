import { IconName } from "@/components/icons";
import { StyleProp, ViewStyle } from "react-native";

export type RowNavVariant = "default" | "danger";

export type RowNavBaseProps = {
  variant?: RowNavVariant;
  onPress: () => void;
  title: string;
  icon: IconName;
  style?: StyleProp<ViewStyle>;
};

export type RowNavTrailingProps =
  | { trailing: "chevronWithValue"; trailingValue: string }
  | { trailing: "chevron" | "noChevron"; trailingValue?: never };

export type RowNavProps = RowNavBaseProps & RowNavTrailingProps;
