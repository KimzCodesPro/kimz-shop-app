import { OrderCard } from "@/components/ui/card";
import { FlashList } from "@shopify/flash-list";
import { View } from "react-native";
import { MY_ORDERS_LIST } from "../../data";
import styles from "./myOrderListStyles";

const MyOrderList = () => {
  return (
    <FlashList
      data={MY_ORDERS_LIST}
      keyExtractor={(item) => item.orderNumber}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      renderItem={({ item }) => <OrderCard {...item} />}
    />
  );
};

export default MyOrderList;
