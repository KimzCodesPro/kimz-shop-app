import translation from "@/store/translation/translation.json";

export type Language = "en" | "ar";

export type Direction = "ltr" | "rtl";

export type TranslationKey = keyof typeof translation.en.keys;

export type TranslateParams = Record<string, string | number>;

export type TranslateFn = (
  key: TranslationKey,
  params?: TranslateParams,
) => string;
