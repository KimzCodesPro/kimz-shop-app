import { Language, TypographyVariant } from "@/types";
import { ColorValue, StyleProp, TextProps, TextStyle } from "react-native";

type TextChildren = string | number | TextChildren[];

export type TypographyProps = {
  variant: TypographyVariant;
  children: TextChildren;
  style?: StyleProp<TextStyle>;
  color?: ColorValue;
  forceLanguage?: Language;
  textTransform?: "none" | "capitalize" | "uppercase" | "lowercase";
  textAlign?: "left" | "right" | "center";
} & Omit<TextProps, "children">;
