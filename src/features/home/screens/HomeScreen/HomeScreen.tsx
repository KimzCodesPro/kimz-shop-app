import { ScreenLayout } from "@/components/ui/layout";
import { Tabs } from "@/components/ui/navigations";
import { useTranslation } from "@/hooks";
import { CategoryList, HomeList } from "../../categories";

const HomeScreen = () => {
  const { t } = useTranslation();

  return (
    <ScreenLayout hasTabBar>
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
