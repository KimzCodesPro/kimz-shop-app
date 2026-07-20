import { IconName } from "@/components/icons";
import { StyleProp, ViewStyle } from "react-native";

export type StatusType = "default" | "error" | "focused";

export type TextInputProps = {
  label: string;
  icon: IconName;
  placeholder: string;
  errorMessage?: string;
  type?: "password" | "text";
  value?: string;
  viewStyle?: StyleProp<ViewStyle>;
  onChange?: (text: string) => void;
  clearInput?: () => void;
};

export type ClearInputActionProps = {
  clearInput?: () => void;
  value?: string;
};

export type DisplayErrorMessageProps = {
  errorMessage?: string;
};

export type PasswordVisibilityToggleProps = {
  visible: boolean;
  onToggle: () => void;
};

export type TextInputLabelProps = {
  label: string;
};
