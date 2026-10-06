import { ProductRow } from "@/components/ui/card";
import { Button } from "@/components/ui/inputs";
import { ScreenLayout } from "@/components/ui/layout";
import { TopBar } from "@/components/ui/navigations";
import { OrderSummary } from "@/features/myOrder/screens/OrderDetailsScreen/components";
import { useTranslation } from "@/hooks";
import { View } from "react-native";
import styles from "./cartScreenStyles";
import { CART_ITEMS, CART_SHIPPING } from "./data";

const CartScreen = () => {
  const { t } = useTranslation();

  const subtotal = CART_ITEMS.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <ScreenLayout
      scrollable
      hasTabBar
      renderTopBar={() => <TopBar title={t("common_bottomTabMyCart")} />}
    >
      <View style={styles.list}>
        {CART_ITEMS.map((item) => (
          <ProductRow key={item.id} item={item} />
        ))}
      </View>
      <OrderSummary
        style={styles.summary}
        summary={{
          subtotal,
          shipping: CART_SHIPPING,
          total: subtotal + CART_SHIPPING,
        }}
      />
      <Button title={t("cart_checkout")} onPress={() => {}} />
    </ScreenLayout>
  );
};

export default CartScreen;
