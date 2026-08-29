import { themeDark, themeLight, themeSystem } from "@/assets/images";
import { ImageRadioGroupOption, SwitchGroupChange } from "@/components/ui/inputs";
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

  const [logoutConfirm, setLogoutConfirm] = useState(false);
  const languageBottomSheetRef = useRef<BottomSheetRef | null>(null);
  const themeBottomSheetRef = useRef<BottomSheetRef | null>(null);
  const notificationsBottomSheetRef = useRef<BottomSheetRef | null>(null);

  const languageOptions = [
    { label: t("common_english"), value: "en" },
    { label: t("common_arabic"), value: "ar" },
  ];

  const onSelectLanguage = async (value: string) => {
    languageBottomSheetRef.current?.close();
    await setLanguage(value as Language);
  };

  const themeOptions: ImageRadioGroupOption[] = [
    { label: t("common_light"), value: "light", image: themeLight },
    { label: t("common_dark"), value: "dark", image: themeDark },
    { label: t("common_system"), value: "system", image: themeSystem },
  ];

  const selectedThemeLabel =
    themeOptions.find((option) => option.value === selectedTheme)?.label ?? "";

  const onSelectTheme = (value: string) => {
    themeBottomSheetRef.current?.close();
    setTheme(value as Theme);
  };

  const notificationOptions = [
    {
      label: t("account_pushNotifications"),
      value: "pushNotifications",
      enabled: enableNotifications,
    },
  ];

  const onToggleNotification = ({ value, enabled }: SwitchGroupChange) => {
    if (value === "pushNotifications") {
      setEnableNotifications(enabled);
    }
  };

  const pageNavigationList: PageNavigationList = [
    {
      title: t("account_account"),
      rows: [
        {
          icon: "user",
          title: t("account_editProfile"),
          trailing: "chevron",
          onPress: () => router.push("/account/editProfile"),
        },
        {
          icon: "lock",
          title: t("account_changePassword"),
          trailing: "chevron",
          onPress: () => router.push("/account/changePassword"),
        },
      ],
    },
    {
      title: t("account_shopping"),
      rows: [
        {
          icon: "map-pin",
          title: t("account_address"),
          trailing: "chevron",
          onPress: () => router.push("/account/addresses"),
        },
        {
          icon: "truck",
          title: t("account_myOrders"),
          trailing: "chevron",
          onPress: () => {},
        },
      ],
    },
    {
      title: t("account_preferences"),
      rows: [
        {
          icon: "bell",
          title: t("account_notifications"),
          trailing: "chevron",
          onPress: () => {
            notificationsBottomSheetRef.current?.expand();
          },
        },

        {
          icon: "world",
          title: t("account_language"),
          trailing: "chevronWithValue",
          trailingValue:
            selectedLanguage === "en"
              ? t("common_english")
              : t("common_arabic"),
          onPress: () => {
            languageBottomSheetRef.current?.expand();
          },
        },
        {
          icon: "palette",
          title: t("account_theme"),
          trailing: "chevronWithValue",
          trailingValue: selectedThemeLabel,
          onPress: () => {
            themeBottomSheetRef.current?.expand();
          },
        },
      ],
    },
    {
      title: t("account_support"),
      rows: [
        {
          icon: "help",
          title: t("account_helpAndPolicies"),
          trailing: "chevron",
          onPress: () => router.push("/account/helpAndSupport"),
        },
        {
          icon: "file-text",
          title: t("account_legalAndPolicies"),
          trailing: "chevron",
          onPress: () => router.push("/account/legalAndPolicies"),
        },
        {
          variant: "danger",
          icon: "logout",
          title: t("account_logout"),
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
    selectedLanguage,
    languageOptions,
    onSelectLanguage,
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
