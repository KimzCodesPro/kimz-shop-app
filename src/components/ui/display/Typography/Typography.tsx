import useFontStyles from "@/hooks/useFontStyles";
import { I18nManager, Text } from "react-native";
import { TypographyProps } from "./types";

// RN's default textAlign ("auto") resolves from the string's own first strong
// character, so Latin labels stay left-aligned even in a mirrored app. Align
// off I18nManager instead so text follows the app direction, not the content.
const textAlign = I18nManager.isRTL ? "right" : "left";

const Typography = ({
  variant,
  children,
  style,
  color,
  textTransform,
  ...props
}: TypographyProps) => {
  const typographyStyles = useFontStyles();
  return (
    <Text
      style={[
        typographyStyles[variant],
        { color, textTransform, textAlign },
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};

export default Typography;
