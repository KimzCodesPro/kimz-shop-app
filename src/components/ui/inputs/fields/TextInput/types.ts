import { IconName } from "@/components/icons";
import { InputBaseProps } from "../shared/types";

type TextInputTypePros =
  | { type?: "text"; iconName: IconName; clearInput?: () => void }
  | { type: "password"; iconName?: never; clearInput?: never };

export type TextInputProps = InputBaseProps & TextInputTypePros;
