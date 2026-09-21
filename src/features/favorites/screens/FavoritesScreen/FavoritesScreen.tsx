import { ScreenLayout } from "@/components/ui/layout";
import { TopBar } from "@/components/ui/navigations";
import { useTranslation } from "@/hooks";

const FavoritesScreen = () => {
  const { t } = useTranslation();

  return (
    <ScreenLayout
      renderTopBar={() => <TopBar title={t("favorite_title")} goBack />}
    >
      {null}
    </ScreenLayout>
  );
};

export default FavoritesScreen;
