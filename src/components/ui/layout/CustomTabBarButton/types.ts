import { IconName } from "@/components/icons";
import { BottomTabBarButtonProps } from "expo-router/js-tabs";

export type CustomTabBarButtonProps = BottomTabBarButtonProps & {
  iconName: IconName;
  label: string;
};
