import { ScreenLayout } from "@/components/ui/layout";
import { TopBar } from "@/components/ui/navigations";
import { useTranslation } from "@/src/hooks";
import { ETABanner, ItemCard, TrackingTimeline } from "./components";
import { ACTIVE_STAGE, TRACKING_STEPS } from "./data";
import styles from "./orderTrackingScreenStyles";

const OrderTrackingScreen = () => {
  const { t } = useTranslation();

  return (
    <ScreenLayout
      scrollable
      renderTopBar={() => <TopBar title={t("orders_trackingTitle")} goBack />}
    >
      <ItemCard style={styles.itemCard} />
      <ETABanner
        style={styles.etaBanner}
        title="Arriving May 20"
        subTitle="In Transit · DHL Express"
      />
      <TrackingTimeline steps={TRACKING_STEPS} activeStage={ACTIVE_STAGE} />
    </ScreenLayout>
  );
};

export default OrderTrackingScreen;
