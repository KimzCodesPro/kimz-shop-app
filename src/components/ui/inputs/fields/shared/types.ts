import { IconName } from "@/src/components/icons";
import React from "react";
import { StyleProp, ViewStyle } from "react-native";

export type StatusType = "default" | "error" | "focused" | "filled";

export type FieldWrapperProps = {
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

export type FieldProps = {
  label?: string;
  placeHolder: string;
  errorMessage?: string;
  value: string;
  style?: StyleProp<ViewStyle>;
};

export type FieldErrorMessageProps = {
  errorMessage?: string;
};

export type FieldLabelProps = {
  label?: string;
};
