import { useAppSelector } from "@/store/hooks";
import { useColorScheme } from "react-native";
import useUserPreferences from "./useUserPreferences";

const useTheme = () => {
  const systemScheme = useColorScheme();
  const { theme: selectedTheme } = useUserPreferences();

  const colors = useAppSelector((state) => state.theme);

  const getSystemSchema = systemScheme === "dark" ? "dark" : "light";

  const resolved = selectedTheme === "system" ? getSystemSchema : selectedTheme;

  return colors[resolved];
};

export default useTheme;
