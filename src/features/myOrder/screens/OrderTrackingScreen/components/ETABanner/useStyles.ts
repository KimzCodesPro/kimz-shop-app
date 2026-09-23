import { useTheme } from "@/hooks";
import { StyleSheet } from "react-native";

const useStyles = () => {
  const colors = useTheme();

  const styles = StyleSheet.create({
    container: {},
    info: {},
    title: {},
    eta: {},
  });

  return { styles, colors };
};

export default useStyles;
