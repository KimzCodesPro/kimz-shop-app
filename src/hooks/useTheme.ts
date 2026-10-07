import { useAppSelector } from "@/store/hooks";
import useUserPreferences from "./useUserPreferences";

const useTheme = () => {
  const { colorScheme } = useUserPreferences();

  const colors = useAppSelector((state) => state.theme);

  return colors[colorScheme];
};

export default useTheme;
