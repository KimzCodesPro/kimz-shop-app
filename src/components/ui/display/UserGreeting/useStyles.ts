import { useTheme } from "@/hooks";
import { spacing } from "@/constants";
import { StyleSheet } from "react-native";
import { userGreetingTypography } from "./helpers";

const useStyles = () => {
  const colors = useTheme();

  const typographyMapping = userGreetingTypography(colors);

  const styles = StyleSheet.create({
    container: {
      alignSelf: "stretch",
      flexDirection: "row",
      gap: spacing.space12.width,
      alignItems: "center",
    },
    textContainer: {
      alignItems: "flex-start",
    },
  });

  return { styles, colors, typographyMapping };
};

export default useStyles;
