import { ScreenLayout } from "@/components/ui/layout";
import { Tabs } from "@/components/ui/navigations";
import { useTranslation } from "@/hooks";
import { avatarSample } from "@/assets/images";
import { CategoryList, Header, HomeList } from "../../components";

const HomeScreen = () => {
  const { t } = useTranslation();

  return (
    <ScreenLayout hasTabBar>
      <Header
        userName="Kareem Nour"
        meta="Let's go shopping"
        imgSrc={avatarSample}
        notification
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
