import OrderCard from "../OrderCard/OrderCard";
import { FlashList } from "@shopify/flash-list";
import { useRouter } from "expo-router";
import { View } from "react-native";
import { MY_ORDERS_LIST } from "../../data";
import styles from "./myOrderListStyles";

const MyOrderList = () => {
  const router = useRouter();

  return (
    <FlashList
      data={MY_ORDERS_LIST}
      keyExtractor={(item) => item.orderNumber}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      renderItem={({ item }) => (
        <OrderCard
          {...item}
          onDetailsPress={() =>
            router.push({
              pathname: "/myOrder/orderDetails",
              params: { status: item.status },
            })
          }
          onTrackingPress={() =>
            router.push({
              pathname: "/myOrder/orderTracking",
              params: { status: item.status },
            })
          }
        />
      )}
    />
  );
};

export default MyOrderList;
