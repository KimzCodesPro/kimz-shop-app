import { IconName } from "@/components/icons";
import { KeyboardTypeOptions } from "react-native";
import { FieldProps } from "../shared/types";

type TextInputTypePros =
  | { type?: "text"; icon: IconName; clearInput?: () => void }
  | { type: "password"; icon?: never; clearInput?: never };

export type TextInputProps = {
  onChangeText?: (text: string) => void;
  maxLength?: number;
  keyboardType?: KeyboardTypeOptions;
} & FieldProps &
  TextInputTypePros;
