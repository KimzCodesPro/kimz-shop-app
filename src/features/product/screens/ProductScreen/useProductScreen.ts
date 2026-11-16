import { useTheme, useTranslation } from "@/hooks";
import { Href, useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import {
  PRODUCT_COLORS,
  PRODUCT_IMAGES,
  PRODUCT_PRICE,
  PRODUCT_STORE,
} from "./data";

const useProductScreen = () => {
  const colors = useTheme();
  const { t } = useTranslation();
  const router = useRouter();
  // route params arrive as strings, e.g. { itemId: "1", from: "/favorites" }
  // `from` is the screen that opened this product, used for the back button
  const { itemId, from } = useLocalSearchParams<{
    itemId: string;
    from?: string;
  }>();
  const productId = +itemId;
  const backTo = from as Href | undefined;
  // first color is selected by default
  const [selectedColor, setSelectedColor] = useState(PRODUCT_COLORS[0].name);
  const [quantity, setQuantity] = useState(1);
  const totalPrice = PRODUCT_PRICE * quantity;

  const addToCartHandler = () => {
    // TODO: add { productId, selectedColor, quantity } to the cart
  };

  const openCartHandler = () => {
    router.push({
      pathname: "/myCart",
      params: { productId },
    });
  };

  return {
    t,
    colors,
    productId,
    backTo,
    productImages: PRODUCT_IMAGES,
    store: PRODUCT_STORE,
    colorPalette: PRODUCT_COLORS,
    selectedColor,
    colorChangeHandler: setSelectedColor,
    quantity,
    quantityChangeHandler: setQuantity,
    unitPrice: PRODUCT_PRICE,
    totalPrice,
    addToCartHandler,
    openCartHandler,
  };
};

export default useProductScreen;
