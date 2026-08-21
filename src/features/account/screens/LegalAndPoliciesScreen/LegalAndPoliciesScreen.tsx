import { ScreenLayout } from "@/src/components/ui/layout";
import { TopBar } from "@/src/components/ui/navigations";
import { fonts } from "@/src/constants";
import { useTranslation } from "@/src/hooks";
import { useWindowDimensions } from "react-native";
import RenderHtml from "react-native-render-html";
import useStyles from "./useStyles";

const systemFonts = [...Object.values(fonts.en), ...Object.values(fonts.ar)];

const source = {
  html: `
  <h1>Terms</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ornare quam vel facilisis feugiat amet sagittis arcu, tortor. Sapien, consequat ultrices morbi orci semper sit nulla. Leo auctor ut etiam est, amet aliquet ut vivamus. Odio vulputate est id tincidunt fames.
</p>
<p class>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ornare quam vel facilisis feugiat amet sagittis arcu, tortor. Sapien, consequat ultrices morbi orci semper sit nulla. Leo auctor ut etiam est, amet aliquet ut vivamus. Odio vulputate est id tincidunt fames.
</p>
<h1>Changes to the Service and/or Terms:</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ornare quam vel facilisis feugiat amet sagittis arcu, tortor. Sapien, consequat ultrices morbi orci semper sit nulla. Leo auctor ut etiam est, amet aliquet ut vivamus. Odio vulputate est id tincidunt fames.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ornare quam vel facilisis feugiat amet sagittis arcu, tortor. Sapien, consequat ultrices morbi orci semper sit nulla. Leo auctor ut etiam est, amet aliquet ut vivamus. Odio vulputate est id tincidunt fames.</p>
 
 
`,
};

const LegalAndPoliciesScreen = () => {
  const { t } = useTranslation();
  const { width } = useWindowDimensions();
  const { styles } = useStyles();

  return (
    <ScreenLayout
      scrollable
      renderTopBar={() => (
        <TopBar title={t("account_legalAndPolicies")} goBack />
      )}
    >
      <RenderHtml
        contentWidth={width}
        source={source}
        tagsStyles={styles}
        systemFonts={systemFonts}
      />
    </ScreenLayout>
  );
};

export default LegalAndPoliciesScreen;
