import { useTheme } from "@/hooks";
import { StyleSheet } from "react-native";

const useStyles = () => {
  const colors = useTheme();

  const styles = StyleSheet.create({
    container: {},
  });

  return { styles, colors };
};

export default useStyles;
