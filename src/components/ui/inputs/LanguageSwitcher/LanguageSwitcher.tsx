import Icon from "@/components/icons";
import { Typography } from "@/components/ui/typography";
import { useTranslation, useUserPreferences } from "@/hooks";
import { Language } from "@/types";
import { useRef } from "react";
import { Pressable } from "react-native";
import { BottomSheet, BottomSheetRef } from "../../overlay";
import RadioGroup from "../RadioGroup/RadioGroup";
import { switcherTranslationKeys, WORLD_ICON_SIZE } from "./constants";
import useStyles from "./useStyles";

const LanguageSwitcher = () => {
  const languageBottomSheetRef = useRef<BottomSheetRef | null>(null);

  const { styles, colors } = useStyles();
  const { t } = useTranslation();
  const { language, setLanguage } = useUserPreferences();

  const radioButtonsLanguageOptions = [
    { label: t("account_settingLanguageEnglish"), value: "en" },
    { label: t("account_settingLanguageArabic"), value: "ar" },
  ];

  const onSelectLanguage = async (value: string) => {
    languageBottomSheetRef.current?.dismiss();
    await setLanguage(value as Language);
  };

  return (
    <>
      <Pressable
        style={styles.switcherContainer}
        onPress={() => languageBottomSheetRef.current?.present()}
      >
        <Icon
          size={WORLD_ICON_SIZE}
          name="world"
          color={colors.foreground.secondary}
        />
        <Typography variant="smallBold" color={colors.foreground.secondary}>
          {t(switcherTranslationKeys[language])}
        </Typography>
      </Pressable>
      <BottomSheet
        ref={languageBottomSheetRef}
        bottomSheetProps={{ snapPoints: ["25%"] }}
        title={t("account_rowLanguage")}
      >
        <BottomSheet.Content>
          <RadioGroup
            options={radioButtonsLanguageOptions}
            selectedValue={language}
            onValueChange={onSelectLanguage}
          />
        </BottomSheet.Content>
      </BottomSheet>
    </>
  );
};

export default LanguageSwitcher;
