import { forcesRTL } from "@/constants";
import { useAppSelector } from "@/store/hooks";
import { TranslateFn } from "@/types";
import useUserPreferences from "./useUserPreferences";

const useTranslation = () => {
  const translation = useAppSelector((state) => state.translation);
  const { language } = useUserPreferences();

  const { dir, keys } = translation[language];

  // Kept in step with the native flag in useUserPreferences: if the layout is
  // pinned mirrored, the JS side has to report rtl too, or text would align
  // against a mirrored layout.
  const direction = forcesRTL ? "rtl" : dir;

  const t: TranslateFn = (key, params) => {
    const text = keys[key] ?? key;
    if (!params) return text;

    return text.replace(/\{\{(\w+)\}\}/g, (match, variable) => {
      return params[variable]?.toString() || match;
    });
  };

  return { t, direction, language };
};

export default useTranslation;
