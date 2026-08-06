import { useTranslation, useUserPreferences } from "@/hooks";
import { BottomSheetRef } from "@/src/components/ui/overlay";
import { Language } from "@/types";
import { useRef, useState } from "react";

const useHomeScreen = () => {
  const { t, language: selectedLanguage } = useTranslation();
  const { setLanguage } = useUserPreferences();
  const [logoutConfirm, setLogoutConfirm] = useState(false);
  const languageBottomSheetRef = useRef<BottomSheetRef | null>(null);

  const languageOptions = [
    { label: t("common_english"), value: "en" },
    { label: t("common_arabic"), value: "ar" },
  ];

  const onSelectLanguage = (value: string) => {
    setLanguage(value as Language);
    languageBottomSheetRef.current?.close();
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
          onPress: () => {},
        },
        {
          icon: "shield",
          title: t("account_security"),
          trailing: "chevron",
          onPress: () => {},
        },
        {
          icon: "world",
          title: t("account_language"),
          trailing: "chevronWithValue",
          trailingValue:
            selectedLanguage === "en" ? t("common_english") : t("common_arabic"),
          onPress: () => {
            languageBottomSheetRef.current?.expand();
          },
        },
        {
          icon: "palette",
          title: t("account_theme"),
          trailing: "chevronWithValue",
          trailingValue: t("common_light"),
          onPress: () => {},
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
  };
};

export default useHomeScreen;
