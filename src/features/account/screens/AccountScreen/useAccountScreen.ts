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
          onPress: () => {},
        },
      ],
    },
    {
      title: t("account_sectionPreferences"),
      rows: [
        {
          icon: "bell",
          title: t("account_rowNotifications"),
          trailing: "chevron",
          onPress: () => {
            notificationsBottomSheetRef.current?.expand();
          },
        },

        {
          icon: "world",
          title: t("account_rowLanguage"),
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
          title: t("account_rowTheme"),
          trailing: "chevronWithValue",
          trailingValue: selectedThemeLabel,
          onPress: () => {
            themeBottomSheetRef.current?.expand();
          },
        },
      ],
    },
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
          title: t("account_rowLogout"),
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
