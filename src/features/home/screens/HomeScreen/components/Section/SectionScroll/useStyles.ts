import { StyleSheet } from "react-native";
import { horizontalSpace } from "./helpers";
import { ItemHorizontalSpace } from "./types";

const useStyles = (itemHorizontalSpace?: ItemHorizontalSpace) => {
  return StyleSheet.create({
    content: {
      gap: horizontalSpace(itemHorizontalSpace || "small"),
    },
  });
};

export default useStyles;
