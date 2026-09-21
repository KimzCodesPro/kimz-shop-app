import { avatarSample } from "@/assets/images";
import { ScreenLayout } from "@/components/ui/layout";
import { Tabs } from "@/components/ui/navigations";
import { useTranslation } from "@/hooks";
import { TextInput } from "@/src/components/ui/inputs";
import { CategoryList, Header, HomeList } from "../../components";
import styles from "./homeScreenStyles";

const HomeScreen = () => {
  const { t } = useTranslation();

  return (
    <ScreenLayout scrollable hasTabBar contentContainerStyle={styles.container}>
      <Header
        userName="Kareem Nour"
        meta="Let's go shopping"
        imgSrc={avatarSample}
        unReadNotifications={true}
      />
      <TextInput
        icon="search"
        value=""
        placeholder={t("home_searchPlaceholder")}
      />
      <Tabs
        defaultTab="home"
        items={[
          {
            tabPrefix: "home",
            tabTitle: t("home_tabHome"),
            tabContent: <HomeList />,
          },
          {
            tabPrefix: "category",
            tabTitle: t("home_tabCategory"),
            tabContent: <CategoryList />,
          },
        ]}
      />
    </ScreenLayout>
  );
};

export default HomeScreen;
