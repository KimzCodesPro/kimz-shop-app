import { IconName } from "@/src/components/icons";
import React from "react";
import { StyleProp, ViewStyle } from "react-native";

export type StatusType = "default" | "error" | "focused" | "filled";

export type FormInputWrapperProps = {
  label?: string;
  inputIconName: IconName;
  children: React.ReactNode;
  errorMessage?: string;
  styles: {
    container: StyleProp<ViewStyle>;
    inputWrapper: StyleProp<ViewStyle>;
  };
  statusColor: string;
};

export type InputBaseProps = {
  label?: string;
  placeHolder: string;
  errorMessage?: string;
  value: string;
  onChangeText?: (text: string) => void;
  style?: StyleProp<ViewStyle>;
};

export type FormInputErrorMessageProps = {
  errorMessage?: string;
};

export type FormInputLabelProps = {
  label?: string;
};
