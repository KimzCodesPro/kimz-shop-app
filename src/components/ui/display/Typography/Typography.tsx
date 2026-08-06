import { useTranslation } from "@/hooks";
import useFontStyles from "@/hooks/useFontStyles";
import { Text } from "react-native";
import { TypographyProps } from "./types";

const Typography = ({
  variant,
  children,
  style,
  color,
  textTransform,
  ...props
}: TypographyProps) => {
  const typographyStyles = useFontStyles();
  const { direction } = useTranslation();

  // RN's default textAlign ("auto") resolves from the string's own first strong
  // character, so Latin labels stay left-aligned even in a mirrored app. Align
  // off the selected language instead, so text follows the app, not the content.
  const textAlign = direction === "rtl" ? "right" : "left";

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
