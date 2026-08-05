import Icon from "@/components/icons";
import Typography from "@/components/ui/display/Typography/Typography";
import { customBottomTab } from "@/constants";
import { Pressable, View } from "react-native";
import { CustomBottomTabButtonProps } from "./types";
import useStyles from "./useStyles";

/**
 * Rendered through `<TabTrigger asChild />`, which hands down `isFocused`,
 * `onPress`, `onLongPress` and the web `href` as props — so the button needs
 * no navigation hook of its own.
 *
 * `ref` reaches the underlying view so callers can measure the button, e.g.
 * to place a sliding indicator or anchor an overlay to a single tab. React 19
 * passes it as a plain prop, so no `forwardRef` wrapper is involved.
 */
const CustomBottomTabButton = ({
  iconName,
  label,
  badge = 0,
  isFocused,
  ref,
  // Dropped on purpose: TabTrigger lays its slot out as a row, and the
  // button owns its own layout.
  style: _style,
  ...rest
}: CustomBottomTabButtonProps) => {
  const { styles, colors, focusedColor } = useStyles(isFocused);
  const { maxBadgeCount, iconSize } = customBottomTab;
  const showBadge = badge > maxBadgeCount ? `${maxBadgeCount}+` : badge;

  // "9+" is a visual truncation, so announce the real count instead.
  const accessibilityLabel = rest["aria-label"] ?? label;
  const badgeLabel = badge
    ? `${accessibilityLabel}, ${badge}`
    : accessibilityLabel;

  return (
    <Pressable
      ref={ref}
      {...rest}
      style={styles.button}
      role="tab"
      aria-selected={isFocused}
      aria-label={badgeLabel}
    >
      <View style={styles.content}>
        <View style={styles.iconWrapper}>
          <Icon size={iconSize} name={iconName} color={focusedColor} />
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

export default CustomBottomTabButton;
