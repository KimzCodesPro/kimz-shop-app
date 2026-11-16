import { useTranslation } from "@/hooks";
import { usePathname, useRouter } from "expo-router";
import { STORE_PRODUCTS } from "../../data";

const useStoreProductsScreen = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const pathname = usePathname();

  const openProductHandler = (itemId: number) => {
    router.push({
      pathname: "/product",
      params: { itemId, from: pathname },
    });
  };

  return {
    t,
    products: STORE_PRODUCTS,
    openProductHandler,
  };
};

export default useStoreProductsScreen;
