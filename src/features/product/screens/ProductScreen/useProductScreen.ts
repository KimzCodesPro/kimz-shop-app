import { useTranslation } from "@/hooks";
import { Href, useLocalSearchParams, useRouter } from "expo-router";
import { PRODUCT_IMAGES } from "./data";

const useProductScreen = () => {
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

  const openCartHandler = () => {
    router.push({
      pathname: "/myCart",
      params: { productId },
    });
  };

  return {
    t,
    productId,
    backTo,
    productImages: PRODUCT_IMAGES,
    openCartHandler,
  };
};

export default useProductScreen;
