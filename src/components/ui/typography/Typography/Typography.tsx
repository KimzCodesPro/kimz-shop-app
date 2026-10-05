import useFontStyles from "@/hooks/useFontStyles";
import { Text } from "react-native";
import { TypographyProps } from "./types";

const Typography = ({
  variant,
  children,
  style,
  color,
  forceLanguage,
  textTransform,
  textDecorationLine,
  textAlign = "left",
  ...props
}: TypographyProps) => {
  const typographyStyles = useFontStyles(forceLanguage);

  return (
    <Text
      style={[
        typographyStyles[variant],
        { color, textTransform, textAlign, textDecorationLine },
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};

export default Typography;
