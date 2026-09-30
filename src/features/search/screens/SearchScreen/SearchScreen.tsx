import { ScreenLayout } from "@/components/ui/layout";
import { TopBar } from "@/components/ui/navigations";
import { useTranslation } from "@/hooks";

const SearchScreen = () => {
  const { t } = useTranslation();

  return (
    <ScreenLayout
      renderTopBar={() => <TopBar title={t("home_searchPlaceholder")} goBack />}
    >
      {null}
    </ScreenLayout>
  );
};

export default SearchScreen;
