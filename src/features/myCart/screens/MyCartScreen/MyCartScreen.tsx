import { EmptyState } from "@/components/ui/feedback";
import { Button } from "@/components/ui/inputs";
import { ScreenLayout, Separator } from "@/components/ui/layout";
import { TopBar } from "@/components/ui/navigations";
import { BottomSheet, BottomSheetRef } from "@/components/ui/overlay";
import { Typography } from "@/components/ui/typography";
import { useTheme, useTranslation } from "@/hooks";
import { useRouter } from "expo-router";
import { useRef, useState } from "react";
import { FlatList, View } from "react-native";
import { CartItem } from "./components";
import { CART_ITEMS, HAS_CART_ITEMS } from "./data";
import styles from "./myCartScreenStyles";

const MyCartScreen = () => {
  const { t } = useTranslation();
  const colors = useTheme();
  const router = useRouter();
  const [cartItems, setCartItems] = useState(CART_ITEMS);
  const checkoutBottomSheetRef = useRef<BottomSheetRef | null>(null);
  const hasSelectedItems = cartItems.some((item) => item.selected);
  const totalAmount = cartItems.reduce((total, item) => {
    if (item.selected) {
      return total + item.price * item.quantity;
    }
    return total;
  }, 0);

  const handleItemSelected = (itemId: string) => {
    setCartItems((prevItems) => {
      const updateItems = prevItems.map((item) => {
        if (item.id === itemId) {
          return { ...item, selected: !item.selected };
        }
        return item;
      });
      return updateItems;
    });
  };

  const handleQuantityChange = (itemId: string, quantity: number) => {
    setCartItems((prevItems) => {
      const updateItems = prevItems.map((item) => {
        if (item.id === itemId) {
          return { ...item, quantity };
        }
        return item;
      });
      return updateItems;
    });
  };

  return (
    <>
      <ScreenLayout
        hasTabBar
        renderTopBar={() => <TopBar title={t("myCart_title")} />}
      >
        {!HAS_CART_ITEMS ? (
          <EmptyState
            type="cart"
            variant="info"
            title={t("myCart_emptyTitle")}
            description={t("myCart_emptyDesc")}
            action={{
              title: t("myCart_startShopping"),
              onPress: () => {
                router.replace("/");
              },
            }}
          />
        ) : (
          <>
            <FlatList
              data={cartItems}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              ItemSeparatorComponent={Separator}
              renderItem={({ item }) => (
                <CartItem
                  itemId={item.id}
                  image={item.image}
                  product={item.title}
                  color={item.color}
                  price={item.price}
                  quantity={item.quantity}
                  selected={item.selected}
                  onItemSelected={handleItemSelected}
                  onQuantityChange={handleQuantityChange}
                />
              )}
            />
            <Button
              title={t("myCart_proceed")}
              onPress={() => checkoutBottomSheetRef.current?.present()}
              disabled={!hasSelectedItems}
            />
          </>
        )}
      </ScreenLayout>
      {/* checkout bottom sheet */}
      <BottomSheet
        title={t("myCart_orderSummary")}
        ref={checkoutBottomSheetRef}
        bottomSheetProps={{
          snapPoints: ["32%"],
        }}
      >
        <BottomSheet.Content>
          <View style={styles.row}>
            <Typography
              variant="normalBold"
              color={colors.foreground.secondary}
            >
              {t("myCart_subtotal")}
            </Typography>
            <Typography variant="normalBold" color={colors.foreground.primary}>
              $ {totalAmount.toFixed(2)}
            </Typography>
          </View>
          <View style={styles.row}>
            <Typography
              variant="normalBold"
              color={colors.foreground.secondary}
            >
              {t("myCart_shipping")}
            </Typography>
            <Typography variant="normalBold" color={colors.foreground.primary}>
              $ 6.00
            </Typography>
          </View>
          <Separator space="sm" />
          <View style={styles.row}>
            <Typography
              variant="normalBold"
              color={colors.foreground.secondary}
            >
              {t("myCart_totalAmount")}
            </Typography>
            <Typography variant="normalBold" color={colors.foreground.primary}>
              $ {(totalAmount + 6).toFixed(2)}
            </Typography>
          </View>
          <Button
            style={styles.checkOutButton}
            title={t("myCart_checkout")}
            onPress={() => {
              checkoutBottomSheetRef.current?.dismiss();
              router.push("/myCart/checkout");
            }}
          />
        </BottomSheet.Content>
      </BottomSheet>
    </>
  );
};

export default MyCartScreen;
