import { avatarSample } from "@/assets/images";
import { TextInput } from "@/components/ui/inputs";
import { Gutter, ScreenLayout } from "@/components/ui/layout";
import { Tabs } from "@/components/ui/navigations";
import {
  BRANDS_LIST,
  CATEGORIES_LIST,
  PRODUCTS_LIST,
  PRODUCTS_SLIDES,
} from "@/features/home/data";
import { useTranslation } from "@/hooks";
import { useRouter } from "expo-router";
import { Pressable } from "react-native";
import { CategoryTab, Header, HomeTab } from "./components";
import styles from "./homeScreenStyles";

const HomeScreen = () => {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <ScreenLayout
      paddingSides="none"
      scrollable
      hasTabBar
      contentContainerStyle={styles.container}
    >
      <Gutter>
        <Header
          userName={t("home_greeting", { name: "Jonathan" })}
          meta={t("home_greetingSub")}
          imgSrc={avatarSample}
          unReadNotifications={true}
          onUserPress={() => router.navigate("/account")}
          onFavoritePress={() => router.push("/favorites")}
          onNotificationPress={() => router.push("/notifications")}
        />
      </Gutter>
      <Gutter>
        <Pressable onPress={() => router.push("/search")}>
          <TextInput
            icon="search"
            value=""
            placeholder={t("home_searchPlaceholder")}
            style={styles.searchInput}
          />
        </Pressable>
      </Gutter>
      <Tabs
        defaultTab="home"
        items={[
          {
            tabPrefix: "home",
            tabTitle: t("common_bottomTabHome"),
            tabContent: (
              <HomeTab
                slides={PRODUCTS_SLIDES}
                products={PRODUCTS_LIST}
                brands={BRANDS_LIST}
              />
            ),
          },
          {
            tabPrefix: "category",
            tabTitle: t("common_bottomTabCategory"),
            tabContent: <CategoryTab categories={CATEGORIES_LIST} />,
          },
        ]}
      />
    </ScreenLayout>
  );
};

export default HomeScreen;
