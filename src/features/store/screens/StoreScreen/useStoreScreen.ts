import { useTranslation } from "@/hooks";
import { usePathname, useRouter } from "expo-router";
import { STORE, STORE_PRODUCTS, STORE_SLIDES } from "./data";

const useStoreScreen = () => {
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
    store: STORE,
    slides: STORE_SLIDES,
    products: STORE_PRODUCTS,
    openProductHandler,
  };
};

export default useStoreScreen;
