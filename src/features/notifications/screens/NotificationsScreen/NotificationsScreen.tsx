import { ScreenLayout } from "@/components/ui/layout";
import { TopBar } from "@/components/ui/navigations";
import { useTranslation } from "@/hooks";
import { FlashList } from "@shopify/flash-list";
import { NotificationItem } from "../../components";
import { NOTIFICATIONS_LIST } from "./data";

const NotificationsScreen = () => {
  const { t } = useTranslation();

  return (
    <ScreenLayout
      renderTopBar={() => <TopBar title={t("notification_title")} goBack />}
    >
      <FlashList
        data={NOTIFICATIONS_LIST}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <NotificationItem
            type={item.type}
            title={item.title}
            description={item.description}
            timeAgo={t(item.timeAgo)}
          />
        )}
      />
    </ScreenLayout>
  );
};

export default NotificationsScreen;
