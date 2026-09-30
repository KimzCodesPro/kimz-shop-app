import { useTheme } from "@/hooks";
import { Typography } from "@/src/components/ui/typography";
import { View } from "react-native";
import styles from "./sectionHeadStyles";
import { SectionHeadProps } from "./types";

const SectionHead = ({ title, isFirst }: SectionHeadProps) => {
  const colors = useTheme();

  return (
    <View style={isFirst ? styles.Firstcontainer : styles.container}>
      <Typography variant="smallBold" color={colors.foreground.primary}>
        {title}
      </Typography>
    </View>
  );
};

export default SectionHead;
