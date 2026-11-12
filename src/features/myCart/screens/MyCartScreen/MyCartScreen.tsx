import { EmptyState } from "@/components/ui/feedback";
import { Button } from "@/components/ui/inputs";
import { Divider, ScreenLayout } from "@/components/ui/layout";
import { TopBar } from "@/components/ui/navigations";
import { BottomSheet } from "@/components/ui/overlay";
import { FlatList } from "react-native";
import { CartItem, PriceInfo } from "./components";
import styles from "./myCartScreenStyles";
import useMyCartScreen from "./useMyCartScreen";

const MyCartScreen = () => {
  const {
    t,
    hasCartItems,
    cartItems,
    checkoutBottomSheetRef,
    hasSelectedItems,
    subtotal,
    shipping,
    total,
    handleItemSelected,
    handleQuantityChange,
    startShoppingHandler,
    openCheckoutSheetHandler,
    checkoutHandler,
  } = useMyCartScreen();

  return (
    <>
      <ScreenLayout
        hasTabBar
        renderTopBar={() => <TopBar title={t("myCart_title")} />}
      >
        {!hasCartItems ? (
          <EmptyState
            type="cart"
            variant="info"
            title={t("myCart_emptyTitle")}
            description={t("myCart_emptyDesc")}
            action={{
              title: t("myCart_startShopping"),
              onPress: startShoppingHandler,
            }}
          />
        ) : (
          <>
            <FlatList
              data={cartItems}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              ItemSeparatorComponent={<Divider space="lg" />}
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
              onPress={openCheckoutSheetHandler}
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
          snapPoints: ["35%"],
        }}
      >
        <BottomSheet.Content>
          <PriceInfo subtotal={subtotal} shipping={shipping} total={total} />
          <Button
            style={styles.checkOutButton}
            title={t("myCart_checkout")}
            onPress={checkoutHandler}
          />
        </BottomSheet.Content>
      </BottomSheet>
    </>
  );
};

export default MyCartScreen;
