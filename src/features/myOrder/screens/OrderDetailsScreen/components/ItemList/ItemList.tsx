import { View } from "react-native";
import { ProductLineItemCard } from "@/components/ui/card";
import { ItemListProps } from "./types";
import useStyles from "./useStyles";

const ItemList = ({ items }: ItemListProps) => {
  const { styles } = useStyles();

  return (
    <View style={styles.container}>
      {items.map((item) => (
        <ProductLineItemCard key={item.id} item={item} />
      ))}
    </View>
  );
};

export default ItemList;
