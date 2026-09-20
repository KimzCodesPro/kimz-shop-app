import { View } from "react-native";
import { useTheme } from "@/hooks";
import { Typography } from "@/src/components/ui/typography";
import { SectionTitleProps } from "./types";
import styles from "./SectionTitleStyles";

const SectionTitle = ({
  title,
  actionText,
  onActionPress,
  style,
}: SectionTitleProps) => {
  const colors = useTheme();

  return (
    <View style={[style, styles.container]}>
      <Typography variant="largeBold" color={colors.foreground.primary}>
        {title}
      </Typography>
      <Typography
        variant="smallBold"
        color={colors.primary.base}
        onPress={onActionPress}
      >
        {actionText}
      </Typography>
    </View>
  );
};

export default SectionTitle;
