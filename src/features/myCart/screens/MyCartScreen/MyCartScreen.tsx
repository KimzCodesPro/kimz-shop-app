import { EmptyState } from "@/components/ui/feedback";
import { ScreenLayout } from "@/components/ui/layout";
import { TopBar } from "@/components/ui/navigations";
import { useTranslation } from "@/hooks";
import { useRouter } from "expo-router";
import { FlatList } from "react-native";
import { CartItem, Separator } from "./components";
import { CART_ITEMS, HAS_CART_ITEMS } from "./data";

const MyCartScreen = () => {
  const { t } = useTranslation();
  const router = useRouter();

  return (
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
        <FlatList
          data={CART_ITEMS}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={Separator}
          renderItem={({ item }) => (
            <CartItem
              image={item.image}
              product={item.title}
              color={item.color}
              price={item.price}
              quantity={item.quantity}
              selected={true}
              onToggleSelect={() => {}}
            />
          )}
        />
      )}
    </ScreenLayout>
  );
};

export default MyCartScreen;
