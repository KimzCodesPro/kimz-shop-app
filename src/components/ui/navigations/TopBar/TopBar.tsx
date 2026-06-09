import Icon, { IconName } from "@/components/icons";
import { useTranslation } from "@/hooks/useTranslation";
import { Href, useRouter } from "expo-router";
import { Pressable, View } from "react-native";
import { Typography } from "../../display";
import useStyles from "./useStyles";

type TopBarProps = {
  canGoBack?: boolean;
  forceBack?: Href;
  title: string;
  onAction?: { iconName: IconName; onPress: () => void };
};

const TopBar = ({ title, onAction, canGoBack, forceBack }: TopBarProps) => {
  const { direction } = useTranslation();
  const router = useRouter();
  const { styles, colors } = useStyles();

  const hasForceBack = !!forceBack;

  const isRTL = direction === "rtl";

  const handleBack = () => {
    if (forceBack) {
      router.push(forceBack);
    } else {
      if (router.canGoBack()) {
        router.back();
      }
    }
  };

  return (
    <View style={styles.container}>
      {canGoBack || hasForceBack ? (
        <Pressable onPress={handleBack}>
          <Icon
            name="chevron"
            size={22}
            color={colors.foreground.primary}
            isRTL={isRTL}
          />
        </Pressable>
      ) : (
        <View />
      )}
      <Typography variant="mediumBold" color={colors.foreground.primary}>
        {title}
      </Typography>
      {onAction ? (
        <Pressable onPress={onAction.onPress}>
          <Icon
            name={onAction.iconName}
            size={22}
            color={colors.foreground.primary}
          />
        </Pressable>
      ) : (
        <View />
      )}
    </View>
  );
};

export default TopBar;
