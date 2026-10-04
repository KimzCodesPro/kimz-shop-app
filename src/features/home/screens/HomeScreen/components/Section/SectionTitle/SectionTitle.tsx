import { useTheme } from "@/hooks";
import { Typography } from "@/src/components/ui/typography";
import { useRouter } from "expo-router";
import { View } from "react-native";
import styles from "./sectionTitleStyles";
import { SectionTitleProps } from "./types";

const SectionTitle = ({
  title,
  actionText,
  seeAllLink,
  style,
}: SectionTitleProps) => {
  const colors = useTheme();
  const router = useRouter();

  return (
    <View style={[style, styles.container]}>
      <Typography variant="mediumBold" color={colors.foreground.primary}>
        {title}
      </Typography>
      <Typography
        variant="smallBold"
        color={colors.primary.base}
        onPress={() => router.push(seeAllLink)}
      >
        {actionText}
      </Typography>
    </View>
  );
};

export default SectionTitle;
