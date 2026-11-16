import radius from "@/constants/radius";
import { useTheme } from "@/hooks";
import { HS, VS } from "@/utils/scaling";
import { StyleSheet } from "react-native";
import { getFavoriteButtonColors } from "./helpers";

const useStyles = (isFavorite: boolean) => {
  const colors = useTheme();
  const buttonColors = getFavoriteButtonColors(colors, isFavorite);

  const styles = StyleSheet.create({
    container: {
      backgroundColor: buttonColors.background,
      height: VS(40),
      width: HS(40),
      borderRadius: radius.full,
      justifyContent: "center",
      alignItems: "center",
    },
  });

  return { styles, buttonColors };
};

export default useStyles;
