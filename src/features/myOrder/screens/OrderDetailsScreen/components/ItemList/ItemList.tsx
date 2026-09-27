import { View } from "react-native";
import Item from "../Item/Item";
import { ItemListProps } from "./types";
import useStyles from "./useStyles";

const ItemList = ({ items }: ItemListProps) => {
  const { styles } = useStyles();

  return (
    <View style={styles.container}>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </View>
  );
};

export default ItemList;
