import { RenderHtml } from "@/src/components/ui/display";
import { ScreenLayout } from "@/src/components/ui/layout";
import { TopBar } from "@/src/components/ui/navigations";
import { useTranslation } from "@/src/hooks";
import useStyles from "./useStyles";

const LegalAndPoliciesScreen = () => {
  const { t } = useTranslation();
  const { styles } = useStyles();

  const source = {
    html: `
<h1>${t("legal_termsTitle")}</h1>
<p>${t("legal_loremLong")}</p>
<p>${t("legal_loremLong")}</p>
<h1>${t("legal_changesTitle")}</h1>
<p>${t("legal_loremLong")}</p>
<p>${t("legal_loremLong")}</p>
`,
  };

  return (
    <ScreenLayout
      scrollable
      renderTopBar={() => <TopBar title={t("legal_title")} goBack />}
    >
      <RenderHtml source={source} tagsStyles={styles} />
    </ScreenLayout>
  );
};

export default LegalAndPoliciesScreen;
