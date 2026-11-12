import { Typography } from "@/components/ui/typography";
import { useTheme } from "@/hooks";
import { View } from "react-native";
import styles from "./sectionTitleStyles";
import { SectionTitleProps } from "./types";

const SectionTitle = ({
  title,
  actionText,
  onActionPress,
  style,
}: SectionTitleProps) => {
  const colors = useTheme();

  return (
    <View style={[style, styles.container]}>
      <Typography variant="mediumBold" color={colors.foreground.primary}>
        {title}
      </Typography>
      {/* optional action, e.g. "See all" */}
      {actionText && (
        <Typography
          variant="smallBold"
          color={colors.primary.base}
          onPress={onActionPress}
        >
          {actionText}
        </Typography>
      )}
    </View>
  );
};

export default SectionTitle;
