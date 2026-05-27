import { fontStyles } from "@/constants";
import { Language, TypographyVariant } from "@/types";
import { StyleProp, Text, TextStyle } from "react-native";
type TypographyProps = {
  language?: Language;
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
}: TypographyProps) => {
  const typography = fontStyles[language];

  return (
    <Text style={[typography[variant], { color }, style]}>{children}</Text>
  );
};

export default Typography;
