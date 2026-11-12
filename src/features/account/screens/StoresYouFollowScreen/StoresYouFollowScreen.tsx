import { EmptyState } from "@/components/ui/feedback";
import { ScreenLayout } from "@/components/ui/layout";
import { TopBar } from "@/components/ui/navigations";
import { useTranslation } from "@/hooks";
import { FlashList } from "@shopify/flash-list";
import { useRouter } from "expo-router";
import { StoreCard } from "./components";
import { HAS_STORES, STORES_LIST } from "./data";
import styles from "./storesYouFollowScreenStyles";

const StoresYouFollowScreen = () => {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <ScreenLayout
      renderTopBar={() => <TopBar title={t("common_storesYouFollow")} goBack />}
    >
      {!HAS_STORES ? (
        <EmptyState
          type="storesFollow"
          variant="secondary"
          title={t("stores_emptyTitle")}
          description={t("stores_emptyDesc")}
          action={{
            title: t("stores_browseButton"),
            onPress: () => {
              router.replace("/");
            },
          }}
        />
      ) : (
        <FlashList
          data={STORES_LIST}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <StoreCard
              name={item.name}
              imgSrc={item.imgSrc}
              followerNumber={item.followerNumber}
              removeFollowing={() => {}}
              style={styles.card}
            />
          )}
        />
      )}
    </ScreenLayout>
  );
};

export default StoresYouFollowScreen;
