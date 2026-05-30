import { useAppSelector } from "@/store/hooks";

export const useUserPreferences = () => {
  return useAppSelector((state) => state.userPreferences);
};
