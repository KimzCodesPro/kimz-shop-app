import { OrderCard } from "@/components/ui/card";
import { FlashList } from "@shopify/flash-list";
import { View } from "react-native";
import { HISTORY_ORDERS_LIST } from "../../data";
import styles from "./historyListStyles";

const HistoryList = () => {
  return (
    <FlashList
      data={HISTORY_ORDERS_LIST}
      keyExtractor={(item) => item.orderNumber}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      renderItem={({ item }) => <OrderCard {...item} />}
    />
  );
};

export default HistoryList;
