import { IconName } from "@/components/icons";
import { FieldProps } from "../shared/types";

type TextInputTypePros =
  | { type?: "text"; icon: IconName; clearInput?: () => void }
  | { type: "password"; icon?: never; clearInput?: never };

export type TextInputProps = {
  onChangeText?: (text: string) => void;
} & FieldProps &
  TextInputTypePros;
