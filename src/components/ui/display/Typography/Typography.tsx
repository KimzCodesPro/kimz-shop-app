import useFontStyles from "@/hooks/useFontStyles";
import { TypographyVariant } from "@/types";
import { TextProps } from "@expo/ui/jetpack-compose";
import { StyleProp, Text, TextStyle } from "react-native";
type TypographyProps = TextProps & {
  textTransform?: "none" | "capitalize" | "uppercase" | "lowercase";
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
  textTransform = "none",
  ...reset
}: TypographyProps) => {
  const typography = useFontStyles();

  return (
    <Text
      style={[typography[variant], { color, textTransform }, style]}
      {...reset}
    >
      {children}
    </Text>
  );
};

export default Typography;
