import { themeDark, themeLight, themeSystem } from "@/assets/images";
import {
  ImageRadioGroupOption,
  SwitchGroupChange,
} from "@/components/ui/inputs";
import { BottomSheetRef } from "@/components/ui/overlay";
import { useTranslation, useUserPreferences } from "@/hooks";
import { Language, Theme } from "@/types";
import { useRouter } from "expo-router";
import { useRef, useState } from "react";
import { PageNavigationList } from "./components/NavigationList/types";

const useAccountScreen = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const {
    setLanguage,
    setTheme,
    theme: selectedTheme,
    language: selectedLanguage,
    enableNotifications,
    setEnableNotifications,
  } = useUserPreferences();

  // local state and sheet refs
  const [logoutConfirm, setLogoutConfirm] = useState(false);
  const [pendingLanguage, setPendingLanguage] = useState(selectedLanguage);
  const languageBottomSheetRef = useRef<BottomSheetRef | null>(null);
  const themeBottomSheetRef = useRef<BottomSheetRef | null>(null);
  const notificationsBottomSheetRef = useRef<BottomSheetRef | null>(null);

  // language options
  const languageOptions = [
    { label: t("common_settingLanguageEnglish"), value: "en" },
    { label: t("common_settingLanguageArabic"), value: "ar" },
  ];

  // language selection (applied on confirm)
  const onSelectLanguage = (value: string) => {
    setPendingLanguage(value as Language);
  };

  const onConfirmLanguage = async () => {
    languageBottomSheetRef.current?.dismiss();
    await setLanguage(pendingLanguage);
  };

  // theme options
  const themeOptions: ImageRadioGroupOption[] = [
    {
      label: t("account_settingThemeLight"),
      value: "light",
      image: themeLight,
    },
    { label: t("account_settingThemeDark"), value: "dark", image: themeDark },
    {
      label: t("account_settingThemeSystem"),
      value: "system",
      image: themeSystem,
    },
  ];

  // theme selection
  const selectedThemeLabel =
    themeOptions.find((option) => option.value === selectedTheme)?.label ?? "";

  const onSelectTheme = (value: string) => {
    themeBottomSheetRef.current?.dismiss();
    setTheme(value as Theme);
  };

  // notification options
  const notificationOptions = [
    {
      label: t("account_settingPushNotifications"),
      value: "pushNotifications",
      enabled: enableNotifications,
    },
  ];

  // notification toggle
  const onToggleNotification = ({ value, enabled }: SwitchGroupChange) => {
    if (value === "pushNotifications") {
      setEnableNotifications(enabled);
    }
  };

  // account page navigation rows
  const pageNavigationList: PageNavigationList = [
    // account section
    {
      title: t("account_sectionAccount"),
      rows: [
        {
          icon: "user",
          title: t("account_rowEditProfile"),
          trailing: "chevron",
          onPress: () => router.push("/account/editProfile"),
        },
        {
          icon: "lock",
          title: t("account_rowChangePassword"),
          trailing: "chevron",
          onPress: () => router.push("/account/changePassword"),
        },
      ],
    },
    // shopping section
    {
      title: t("account_sectionShopping"),
      rows: [
        {
          icon: "map-pin",
          title: t("account_rowAddress"),
          trailing: "chevron",
          onPress: () => router.push("/account/addresses"),
        },
        {
          icon: "truck",
          title: t("account_rowMyOrders"),
          trailing: "chevron",
          onPress: () => router.push("/(protected)/(tabs)/myOrder"),
        },
      ],
    },
    // preferences section
    {
      title: t("account_sectionPreferences"),
      rows: [
        {
          icon: "bell",
          title: t("account_rowNotifications"),
          trailing: "chevron",
          onPress: () => {
            notificationsBottomSheetRef.current?.present();
          },
        },

        {
          icon: "world",
          title: t("account_rowLanguage"),
          trailing: "chevronWithValue",
          trailingValue:
            selectedLanguage === "en"
              ? t("common_settingLanguageEnglish")
              : t("common_settingLanguageArabic"),
          onPress: () => {
            languageBottomSheetRef.current?.present();
          },
        },
        {
          icon: "palette",
          title: t("account_rowTheme"),
          trailing: "chevronWithValue",
          trailingValue: selectedThemeLabel,
          onPress: () => {
            themeBottomSheetRef.current?.present();
          },
        },
      ],
    },
    // support section
    {
      title: t("account_sectionSupport"),
      rows: [
        {
          icon: "help",
          title: t("account_rowHelp"),
          trailing: "chevron",
          onPress: () => router.push("/account/helpAndSupport"),
        },
        {
          icon: "file-text",
          title: t("account_rowLegal"),
          trailing: "chevron",
          onPress: () => router.push("/account/legalAndPolicies"),
        },
        {
          variant: "danger",
          icon: "logout",
          title: t("auth_logoutRow"),
          trailing: "chevron",
          onPress: () => {
            setLogoutConfirm(true);
          },
        },
      ],
    },
  ] as const;

  return {
    pageNavigationList,
    t,
    logoutConfirm,
    setLogoutConfirm,
    pendingLanguage,
    languageOptions,
    onSelectLanguage,
    onConfirmLanguage,
    languageBottomSheetRef,
    themeBottomSheetRef,
    themeOptions,
    selectedTheme,
    onSelectTheme,
    notificationsBottomSheetRef,
    notificationOptions,
    onToggleNotification,
  };
};

export default useAccountScreen;
