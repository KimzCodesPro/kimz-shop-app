import { StyleSheet } from "react-native";
import { ITEM_HORIZONTAL_SPACE } from "./constants";
import { ItemHorizontalSpace } from "./types";

const useStyles = (itemHorizontalSpace?: ItemHorizontalSpace) => {
  return StyleSheet.create({
    content: {
      gap: ITEM_HORIZONTAL_SPACE[itemHorizontalSpace || "small"],
    },
  });
};

export default useStyles;
