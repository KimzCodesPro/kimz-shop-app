import { avatarSample } from "@/assets/images";
import { ScreenLayout } from "@/components/ui/layout";
import { Tabs } from "@/components/ui/navigations";
import { useTranslation } from "@/hooks";
import { TextInput } from "@/src/components/ui/inputs";
import { useRouter } from "expo-router";
import { Pressable } from "react-native";
import { CategoryList, Header, HomeList } from "../../components";
import styles from "./homeScreenStyles";

const HomeScreen = () => {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <ScreenLayout scrollable hasTabBar contentContainerStyle={styles.container}>
      <Header
        userName={t("home_greeting", { name: "Jonathan" })}
        meta={t("home_greetingSub")}
        imgSrc={avatarSample}
        unReadNotifications={true}
        onUserPress={() => router.navigate("/account")}
        onFavoritePress={() => router.push("/favorites")}
        onNotificationPress={() => router.push("/notifications")}
      />
      <Pressable onPress={() => router.push("/search")}>
        <TextInput
          icon="search"
          value=""
          placeholder={t("home_searchPlaceholder")}
          style={styles.searchInput}
        />
      </Pressable>
      <Tabs
        defaultTab="home"
        items={[
          {
            tabPrefix: "home",
            tabTitle: t("common_bottomTabHome"),
            tabContent: <HomeList />,
          },
          {
            tabPrefix: "category",
            tabTitle: t("common_bottomTabCategory"),
            tabContent: <CategoryList />,
          },
        ]}
      />
    </ScreenLayout>
  );
};

export default HomeScreen;
