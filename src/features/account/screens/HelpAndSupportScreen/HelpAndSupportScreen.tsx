import { Accordion } from "@/components/ui/list";
import { ScreenLayout } from "@/components/ui/layout";
import { TopBar } from "@/components/ui/navigations";
import { useTranslation } from "@/hooks";
import { FAQS } from "./data";

const HelpAndSupportScreen = () => {
  const { t } = useTranslation();

  return (
    <ScreenLayout
      scrollable
      renderTopBar={() => (
        <TopBar title={t("account_helpSupportTitle")} goBack />
      )}
    >
      <Accordion items={FAQS} />
    </ScreenLayout>
  );
};

export default HelpAndSupportScreen;
