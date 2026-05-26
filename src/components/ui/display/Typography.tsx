import { useTypography } from "@/hooks";
import { TypographyVariant } from "@/types";
import { StyleProp, Text, TextStyle } from "react-native";

type TypographyProps = {
  variant: TypographyVariant;
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
  color?: string;
};

const Typography = ({ variant, children, style, color }: TypographyProps) => {
  const typography = useTypography();

  return (
    <Text style={[typography[variant], { color }, style]}>{children}</Text>
  );
};

export default Typography;
