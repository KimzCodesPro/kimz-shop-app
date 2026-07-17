import { useAppSelector } from "@/store/hooks";
import { TranslateFn } from "@/types";
import useUserPreferences from "./useUserPreferences";

const useTranslation = () => {
  const translation = useAppSelector((state) => state.translation);
  const { language } = useUserPreferences();

  const { dir: direction, keys } = translation[language];

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
