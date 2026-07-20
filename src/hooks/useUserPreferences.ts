import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  setLanguage,
  setTheme,
} from "@/store/userPreferences/userPreferencesSlice";
import { Language, Theme } from "@/types";

const useUserPreferences = () => {
  const preferences = useAppSelector((state) => state.userPreferences);
  const dispatch = useAppDispatch();

  return {
    ...preferences,
    setLanguage: (language: Language) => dispatch(setLanguage(language)),
    setTheme: (theme: Theme) => dispatch(setTheme(theme)),
  };
};

export default useUserPreferences;
