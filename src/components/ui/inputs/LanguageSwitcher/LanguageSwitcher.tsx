import Icon from "@/components/icons";
import { Typography } from "@/components/ui/typography";
import { useTranslation, useUserPreferences } from "@/hooks";
import { Language } from "@/types";
import { useRef, useState } from "react";
import { Pressable } from "react-native";
import { BottomSheet, BottomSheetRef } from "../../overlay";
import Button from "../Button/Button";
import RadioGroup from "../RadioGroup/RadioGroup";
import { switcherTranslationKeys, WORLD_ICON_SIZE } from "./constants";
import { LanguageSwitcherProps } from "./types";
import useStyles from "./useStyles";

const LanguageSwitcher = ({ style }: LanguageSwitcherProps) => {
  const languageBottomSheetRef = useRef<BottomSheetRef | null>(null);

  const { styles, colors } = useStyles();
  const { t } = useTranslation();
  const { language, setLanguage: setLanguagePreference } = useUserPreferences();
  const [pendingLanguage, setPendingLanguage] = useState(language);

  const radioButtonsLanguageOptions = [
    { label: t("common_settingLanguageEnglish"), value: "en" },
    { label: t("common_settingLanguageArabic"), value: "ar" },
  ];

  const onSelectLanguage = (value: string) => {
    setPendingLanguage(value as Language);
  };

  const confirmChangeLanguage = async () => {
    languageBottomSheetRef.current?.dismiss();
    await setLanguagePreference(pendingLanguage);
  };

  return (
    <>
      <Pressable
        style={[styles.switcherContainer, style]}
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
        bottomSheetProps={{ snapPoints: ["33%"] }}
        title={t("account_rowLanguage")}
      >
        <BottomSheet.Content>
          <RadioGroup
            options={radioButtonsLanguageOptions}
            selectedValue={pendingLanguage}
            onValueChange={onSelectLanguage}
          />
          <Button
            style={styles.confirmBtn}
            title={t("common_confirm")}
            onPress={() => confirmChangeLanguage()}
          />
        </BottomSheet.Content>
      </BottomSheet>
    </>
  );
};

export default LanguageSwitcher;
