import { IconName } from "@/components/icons";
import { TabTriggerSlotProps } from "expo-router/ui";
import { ComponentRef, Ref } from "react";
import { View } from "react-native";

// expo-router types `ref` as `RefAttributes<View>`, but with React Native's
// strict types `View` is the component itself, not its instance. Re-declare
// it with the instance type so it can be forwarded to `Pressable`.
export type CustomBottomTabButtonProps = Omit<TabTriggerSlotProps, "ref"> & {
  ref?: Ref<ComponentRef<typeof View>>;
  icon: IconName;
  label: string;
  badge?: number;
};
