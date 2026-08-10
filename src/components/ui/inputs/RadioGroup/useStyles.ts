import { spacing } from "@/constants";
import { scalingMethods } from "@/utils";
import { StyleSheet } from "react-native";
const { VS } = scalingMethods;

const useStyles = () => {
  const styles = StyleSheet.create({
    container: {
      alignSelf: "stretch",
      gap: spacing.space16.height,
    },
    radioItem: {
      height: VS(30),
      justifyContent: "center",
    },
  });

  return { styles };
};

export default useStyles;
