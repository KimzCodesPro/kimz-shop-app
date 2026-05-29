import { fontStyles } from "@/constants";
import { Language, TypographyVariant } from "@/types";
import { Text, TextProps } from "react-native";

type TypographyProps = TextProps & {
  language?: Language;
  variant: TypographyVariant;
  color?: string;
};

const Typography = ({
  language = "ar",
  variant,
  children,
  style,
  color,
  ...rest
}: TypographyProps) => {
  const typography = fontStyles[language];

  return (
    <Text {...rest} style={[typography[variant], { color }, style]}>
      {children}
    </Text>
  );
};

export default Typography;
