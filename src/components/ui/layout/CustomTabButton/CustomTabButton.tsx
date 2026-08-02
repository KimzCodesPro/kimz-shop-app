import Icon, { IconName } from "@/components/icons";
import Typography from "@/components/ui/display/Typography/Typography";
import { spacing } from "@/constants";
import { useTheme } from "@/hooks";
import { scalingMethods } from "@/utils";
import { BottomTabBarButtonProps } from "expo-router/js-tabs";
import { Pressable, StyleSheet, View } from "react-native";

const { HS, VS } = scalingMethods;

type CustomTabButtonProps = BottomTabBarButtonProps & {
  name: IconName;
  label: string;
};

const CustomTabButton = ({
  name,
  label,
  onPress,
  onLongPress,
  ...rest
}: CustomTabButtonProps) => {
  const colors = useTheme();

  const focused = rest["aria-selected"] ?? false;
  const color = focused ? colors.primary.base : colors.foreground.tertiary;
  const borderTopColor = focused ? colors.primary.base : "transparent";

  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.button}
      role="tab"
      aria-selected={focused}
      aria-label={rest["aria-label"]}
    >
      <View style={[styles.content, { borderTopColor }]}>
        <Icon size={24} name={name} color={color} />
        <Typography variant="xsmallBold" color={color}>
          {label}
        </Typography>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignItems: "center",
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.space8.height,
    borderTopWidth: HS(2),
    width: HS(70),
    paddingVertical: VS(12),
  },
});

export default CustomTabButton;
