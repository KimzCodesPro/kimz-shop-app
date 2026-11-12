import { useTheme } from "@/hooks";
import { spacing } from "@/constants";
import { StyleSheet } from "react-native";
import { getUserGreetingTypography } from "./helpers";
import { UserGreetingProps } from "./types";

const useStyles = (size: UserGreetingProps["size"]) => {
  const colors = useTheme();

  const typography = getUserGreetingTypography(colors, size);

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

  return { styles, colors, typography };
};

export default useStyles;
