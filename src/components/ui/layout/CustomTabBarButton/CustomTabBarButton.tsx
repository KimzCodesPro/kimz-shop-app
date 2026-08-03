import Icon from "@/components/icons";
import Typography from "@/components/ui/display/Typography/Typography";
import { useIsFocused } from "expo-router";
import { Pressable, View } from "react-native";
import { TAB_ICON_SIZE } from "./constants";
import { CustomTabBarButtonProps } from "./types";
import useStyles from "./useStyles";

const MAX_BADGE_COUNT = 9;

const CustomTabBarButton = ({
  iconName,
  label,
  badge = 0,
  onPress,
  onLongPress,
  ...rest
}: CustomTabBarButtonProps) => {
  const focused = useIsFocused();
  const { styles, colors, focusedColor } = useStyles(focused);
  const showBadge = badge > MAX_BADGE_COUNT ? `${MAX_BADGE_COUNT}+` : badge;

  // "9+" is a visual truncation, so announce the real count instead.
  const accessibilityLabel = rest["aria-label"] ?? label;
  const badgeLabel = badge
    ? `${accessibilityLabel}, ${badge}`
    : accessibilityLabel;

  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.button}
      role="tab"
      aria-selected={focused}
      aria-label={badgeLabel}
    >
      <View style={styles.content}>
        <View style={styles.iconWrapper}>
          <Icon size={TAB_ICON_SIZE} name={iconName} color={focusedColor} />
          {!!badge && (
            <View style={styles.badge}>
              <Typography
                variant="xsmallBold"
                color={colors.foreground.contrast}
              >
                {showBadge}
              </Typography>
            </View>
          )}
        </View>
        <Typography variant="xsmallBold" color={focusedColor}>
          {label}
        </Typography>
      </View>
    </Pressable>
  );
};

export default CustomTabBarButton;
