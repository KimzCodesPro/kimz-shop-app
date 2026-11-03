import { EmptyState } from "@/components/ui/feedback";
import { ScreenLayout } from "@/components/ui/layout";
import { TopBar } from "@/components/ui/navigations";
import { useTranslation } from "@/hooks";

const MyCartScreen = () => {
  const { t } = useTranslation();


  return (
    <ScreenLayout
      scrollable
      hasTabBar
      renderTopBar={() => <TopBar title={t("myCart_title")} />}
    >
      <EmptyState
        type="cart"
        variant="info"
        title={t("myCart_emptyTitle")}
        description={t("myCart_emptyDesc")}
      />
    </ScreenLayout>
  );
};

export default MyCartScreen;
