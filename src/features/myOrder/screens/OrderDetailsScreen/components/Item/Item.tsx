/* eslint-disable @typescript-eslint/no-unused-vars */
import { View } from "react-native";
import { ItemProps } from "./types";
import useStyles from "./useStyles";

const Item = ({ style }: ItemProps) => {
  const { styles, colors } = useStyles();

  return <View />;
};

export default Item;
