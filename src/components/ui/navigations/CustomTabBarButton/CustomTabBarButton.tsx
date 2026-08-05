import Icon from "@/components/icons";
import Typography from "@/components/ui/display/Typography/Typography";
import { Pressable, View } from "react-native";
import { MAX_BADGE_COUNT, TAB_ICON_SIZE } from "./constants";
import { CustomTabBarButtonProps } from "./types";
import useStyles from "./useStyles";

/**
 * Rendered through `<TabTrigger asChild />`, which hands down `isFocused`,
 * `onPress`, `onLongPress` and the web `href` as props — so the button needs
 * no navigation hook of its own.
 */
const CustomTabBarButton = ({
  iconName,
  label,
  badge = 0,
  isFocused,
  // Dropped on purpose: TabTrigger lays its slot out as a row, and the
  // button owns its own layout.
  style: _style,
  ...rest
}: CustomTabBarButtonProps) => {
  const { styles, colors, focusedColor } = useStyles(isFocused);
  const showBadge = badge > MAX_BADGE_COUNT ? `${MAX_BADGE_COUNT}+` : badge;

  // "9+" is a visual truncation, so announce the real count instead.
  const accessibilityLabel = rest["aria-label"] ?? label;
  const badgeLabel = badge
    ? `${accessibilityLabel}, ${badge}`
    : accessibilityLabel;

  return (
    <Pressable
      {...rest}
      style={styles.button}
      role="tab"
      aria-selected={isFocused}
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
