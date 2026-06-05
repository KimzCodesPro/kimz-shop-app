import useFontStyles from "@/hooks/useFontStyles";
import { TypographyVariant } from "@/types";
import { TextProps } from "@expo/ui/jetpack-compose";
import { StyleProp, Text, TextStyle } from "react-native";
type TypographyProps = TextProps & {
  variant: TypographyVariant;
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
  color?: string;
};

const Typography = ({
  variant,
  children,
  style,
  color,
  ...reset
}: TypographyProps) => {
  const typography = useFontStyles();

  return (
    <Text style={[typography[variant], { color }, style]} {...reset}>
      {children}
    </Text>
  );
};

export default Typography;
