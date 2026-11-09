import { FlashList } from "@shopify/flash-list";
import { useRouter } from "expo-router";
import { View } from "react-native";
import OrderCard from "../OrderCard/OrderCard";
import styles from "./orderListStyles";
import { OrderListProps } from "./types";

const OrderList = ({ orders }: OrderListProps) => {
  const router = useRouter();

  return (
    <FlashList
      data={orders}
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

export default OrderList;
