import { themeDark, themeLight, themeSystem } from "@/assets/images";
import { useTranslation, useUserPreferences } from "@/hooks";
import { BottomSheetRef } from "@/src/components/ui/overlay";
import { Language, Theme } from "@/types";
import { useRef, useState } from "react";
import { ThemeOption } from "./components/ThemeRadioGroup/types";

const useHomeScreen = () => {
  const { t, language: selectedLanguage } = useTranslation();
  const { setLanguage, setTheme, theme: selectedTheme } = useUserPreferences();
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

  const themeOptions: ThemeOption[] = [
    { label: t("common_light"), value: "light", image: themeLight },
    { label: t("common_dark"), value: "dark", image: themeDark },
    { label: t("common_system"), value: "system", image: themeSystem },
  ];

  const selectedThemeLabel =
    themeOptions.find((option) => option.value === selectedTheme)?.label ?? "";

  const onSelectTheme = (value: Theme) => {
    themeBottomSheetRef.current?.close();
    setTheme(value);
  };

  const notificationOptions = [
    { label: t("account_pushNotifications"), value: "push" },
  ];

  const [selectedNotifications, setSelectedNotifications] = useState<string[]>([
    "push",
  ]);

  // Switches toggle independently, so the sheet stays open on change.
  const onToggleNotification = (value: string) => {
    setSelectedNotifications((current) =>
      current.includes(value)
        ? current.filter((selected) => selected !== value)
        : [...current, value],
    );
  };
  const accountGroups = [
    {
      title: t("account_account"),
      rows: [
        {
          icon: "user",
          title: t("account_editProfile"),
          trailing: "chevron",
          onPress: () => {},
        },
        {
          icon: "lock",
          title: t("account_changePassword"),
          trailing: "chevron",
          onPress: () => {},
        },
      ],
    },
    {
      title: t("account_shopping"),
      rows: [
        {
          icon: "map-pin",
          title: t("account_shipping"),
          trailing: "chevron",
          onPress: () => {},
        },
        {
          icon: "credit-card",
          title: t("account_paymentMethods"),
          trailing: "chevron",
          onPress: () => {},
        },
        {
          icon: "shopping-bag",
          title: t("account_storeYouFollow"),
          trailing: "chevron",
          onPress: () => {},
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
          onPress: () => {},
        },
        {
          icon: "file-text",
          title: t("account_legalAndPolicies"),
          trailing: "chevron",
          onPress: () => {},
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
    accountGroups,
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
    selectedNotifications,
    onToggleNotification,
  };
};

export default useHomeScreen;
