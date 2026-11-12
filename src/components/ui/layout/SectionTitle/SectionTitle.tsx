import { Typography } from "@/components/ui/typography";
import { View } from "react-native";
import { SectionTitleProps } from "./types";
import useStyles from "./useStyles";

const SectionTitle = ({
  title,
  actionText,
  onActionPress,
  style,
}: SectionTitleProps) => {
  const { styles, colors } = useStyles();

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
