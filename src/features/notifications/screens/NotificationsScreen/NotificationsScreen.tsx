import { ScreenLayout } from "@/components/ui/layout";
import { TopBar } from "@/components/ui/navigations";
import { useTranslation } from "@/hooks";

const NotificationsScreen = () => {
  const { t } = useTranslation();

  return (
    <ScreenLayout
      renderTopBar={() => <TopBar title={t("notification_title")} goBack />}
    >
      {null}
    </ScreenLayout>
  );
};

export default NotificationsScreen;
