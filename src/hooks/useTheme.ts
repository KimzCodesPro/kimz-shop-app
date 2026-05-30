import { useAppSelector } from "@/store/hooks";
import { Theme } from "@/types";
import { useColorScheme } from "react-native";
import { useUserPreferences } from "./useUserPreferences";

export const useTheme = () => {
  const systemScheme = useColorScheme();
  const { theme: selectedTheme } = useUserPreferences();

  const colors = useAppSelector((state) => state.theme);

  const getSystemSchema = systemScheme === "dark" ? "dark" : "light";

  const resolved: Exclude<Theme, "system"> =
    selectedTheme === "system" ? getSystemSchema : selectedTheme;

  return colors[resolved];
};
