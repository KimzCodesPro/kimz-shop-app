import { fontStyles } from "@/constants";
import { Language, TypographyVariant } from "@/types";
import { TextProps } from "@expo/ui/jetpack-compose";
import { StyleProp, Text, TextStyle } from "react-native";
type TypographyProps = TextProps & {
  language: Language;
  variant: TypographyVariant;
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
  color?: string;
};

const Typography = ({
  language = "ar",
  variant,
  children,
  style,
  color,
  ...reset
}: TypographyProps) => {
  const typography = fontStyles[language];

  return (
    <Text style={[typography[variant], { color }, style]} {...reset}>
      {children}
    </Text>
  );
};

export default Typography;
