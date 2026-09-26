/* eslint-disable @typescript-eslint/no-unused-vars */
import { radius, spacing } from "@/constants";
import { useTheme } from "@/hooks";
import { scalingMethods } from "@/utils";
import { StyleSheet } from "react-native";

const { HS, VS } = scalingMethods;

const useStyles = () => {
  const colors = useTheme();

  const styles = StyleSheet.create({
    container: {},
  });

  return { styles, colors };
};

export default useStyles;
