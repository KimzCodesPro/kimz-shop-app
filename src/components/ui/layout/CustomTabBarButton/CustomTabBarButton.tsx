import Icon from "@/components/icons";
import Typography from "@/components/ui/display/Typography/Typography";
import { useIsFocused } from "expo-router";
import { Pressable, View } from "react-native";
import { CustomTabBarButtonProps } from "./types";
import useStyles from "./useStyles";

const CustomTabBarButton = ({
  iconName,
  label,
  onPress,
  onLongPress,
  ...rest
}: CustomTabBarButtonProps) => {
  const focused = useIsFocused();
  const { styles, focusedColor } = useStyles(focused);

  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.button}
      role="tab"
      aria-selected={focused}
      aria-label={rest["aria-label"]}
    >
      <View style={styles.content}>
        <Icon size={24} name={iconName} color={focusedColor} />
        <Typography variant="xsmallBold" color={focusedColor}>
          {label}
        </Typography>
      </View>
    </Pressable>
  );
};

export default CustomTabBarButton;
