import { BottomSheetRef } from "@/components/ui/overlay";
import { useTranslation } from "@/hooks";
import { useRouter } from "expo-router";
import { useRef, useState } from "react";
import { CART_ITEMS, CART_SHIPPING, HAS_CART_ITEMS } from "./data";

const useMyCartScreen = () => {
  const { t } = useTranslation();
  const router = useRouter();

  const [cartItems, setCartItems] = useState(CART_ITEMS);
  const checkoutBottomSheetRef = useRef<BottomSheetRef | null>(null);

  // prices of the selected items only
  const hasSelectedItems = cartItems.some((item) => item.selected);
  const subtotal = cartItems.reduce((total, item) => {
    if (item.selected) {
      return total + item.price * item.quantity;
    }
    return total;
  }, 0);
  const total = subtotal + CART_SHIPPING;

  const handleItemSelected = (itemId: string) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, selected: !item.selected } : item,
      ),
    );
  };

  const handleQuantityChange = (itemId: string, quantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity } : item,
      ),
    );
  };

  const startShoppingHandler = () => {
    router.replace("/");
  };

  const openCheckoutSheetHandler = () => {
    checkoutBottomSheetRef.current?.present();
  };

  const checkoutHandler = () => {
    checkoutBottomSheetRef.current?.dismiss();
    router.push("/myCart/checkout");
  };

  return {
    t,
    hasCartItems: HAS_CART_ITEMS,
    cartItems,
    checkoutBottomSheetRef,
    hasSelectedItems,
    subtotal,
    shipping: CART_SHIPPING,
    total,
    handleItemSelected,
    handleQuantityChange,
    startShoppingHandler,
    openCheckoutSheetHandler,
    checkoutHandler,
  };
};

export default useMyCartScreen;
