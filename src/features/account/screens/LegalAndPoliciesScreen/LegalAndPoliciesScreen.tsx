import { RenderHtml } from "@/components/ui/display";
import { ScreenLayout } from "@/components/ui/layout";
import { TopBar } from "@/components/ui/navigations";
import { useTranslation } from "@/hooks";
import useStyles from "./useStyles";
import { LEGAL_BODY_TEXT } from "./data";

const LegalAndPoliciesScreen = () => {
  const { t } = useTranslation();
  const { styles } = useStyles();

  const source = {
    html: `
<h1>${t("account_legalTermsTitle")}</h1>
<p>${LEGAL_BODY_TEXT}</p>
<p>${LEGAL_BODY_TEXT}</p>
<h1>${t("account_legalChangesTitle")}</h1>
<p>${LEGAL_BODY_TEXT}</p>
<p>${LEGAL_BODY_TEXT}</p>
`,
  };

  return (
    <ScreenLayout
      scrollable
      renderTopBar={() => <TopBar title={t("account_legalTitle")} goBack />}
    >
      <RenderHtml source={source} tagsStyles={styles} />
    </ScreenLayout>
  );
};

export default LegalAndPoliciesScreen;
