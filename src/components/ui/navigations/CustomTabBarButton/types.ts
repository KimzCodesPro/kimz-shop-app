import { IconName } from "@/components/icons";
import { TabTriggerSlotProps } from "expo-router/ui";

export type CustomTabBarButtonProps = TabTriggerSlotProps & {
  iconName: IconName;
  label: string;
  badge?: number;
};
