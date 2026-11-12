import { productSample } from "@/assets/images";
import { ProductCard } from "@/components/ui/card";
import { EmptyState } from "@/components/ui/feedback";
import { ScreenLayout } from "@/components/ui/layout";
import { TopBar } from "@/components/ui/navigations";
import { useTranslation } from "@/hooks";
import { FlashList } from "@shopify/flash-list";
import { useRouter } from "expo-router";
import { FAVORITES_LIST, HAS_FAVORITES } from "./data";
import styles from "./favoritesScreenStyles";

const FavoritesScreen = () => {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <ScreenLayout
      renderTopBar={() => <TopBar title={t("favorite_title")} goBack />}
    >
      {!HAS_FAVORITES ? (
        <EmptyState
          type="favorite"
          variant="danger"
          title={t("favorite_emptyTitle")}
          description={t("favorite_emptyDesc")}
          action={{
            title: t("favorite_exploreButton"),
            onPress: () => {
              router.replace("/");
            },
          }}
        />
      ) : (
        <FlashList
          data={FAVORITES_LIST}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <ProductCard
              productName={item.productName}
              brand={item.brand}
              price={item.price}
              imgSrc={productSample}
              isFavorite
              onToggleFavorite={() => {}}
              style={index % 2 === 0 ? styles.cardStart : styles.cardEnd}
            />
          )}
        />
      )}
    </ScreenLayout>
  );
};

export default FavoritesScreen;
