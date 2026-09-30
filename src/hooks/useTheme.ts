import { useAppSelector } from "@/store/hooks";
import useUserPreferences from "./useUserPreferences";

const useTheme = () => {
  const { appResolvedTheme } = useUserPreferences();

  const colors = useAppSelector((state) => state.theme);

  return colors[appResolvedTheme];
};

export default useTheme;
