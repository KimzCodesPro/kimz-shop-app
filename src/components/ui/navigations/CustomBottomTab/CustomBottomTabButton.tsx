import Icon from "@/components/icons";
import Typography from "@/components/ui/typography/Typography/Typography";
import { Pressable, View } from "react-native";
import { CustomBottomTabButtonProps } from "./types";
import useStyles from "./useStyles";

const MAX_BADGE_COUNT = 9;

/**
 * Rendered through `<TabTrigger asChild />`, which hands down `isFocused`,
 * `onPress`, `onLongPress` and the web `href` as props — so the button needs
 * no navigation hook of its own.
 *
 * `ref` is a plain prop in React 19 and reaches `Pressable` through `rest`,
 * so callers can measure the button without a `forwardRef` wrapper.
 */
const CustomBottomTabButton = ({
  icon,
  label,
  badge = 0,
  isFocused,
  // Dropped on purpose: TabTrigger lays its slot out as a row, and the
  // button owns its own layout.
  style: _style,
  ...rest
}: CustomBottomTabButtonProps) => {
  const { styles, colors, focusedColor } = useStyles(isFocused);
  const showBadge = badge > MAX_BADGE_COUNT ? `${MAX_BADGE_COUNT}+` : badge;

  // "9+" is a visual truncation, so announce the real count instead.
  const badgeLabel = badge ? `${label}, ${badge}` : label;

  return (
    <Pressable
      {...rest}
      style={styles.tabButton}
      role="tab"
      aria-selected={isFocused}
      aria-label={badgeLabel}
    >
      <View style={styles.tabItem}>
        <View style={styles.iconWrapper}>
          <Icon name={icon} color={focusedColor} />
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
