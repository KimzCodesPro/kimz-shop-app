import { View } from "react-native";
import Animated, {
  Easing,
  FadeInUp,
  FadeOutUp,
  LinearTransition,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { scheduleOnRN } from "react-native-worklets";

import Icon from "@/components/icons";
import { useAppDispatch } from "@/store/hooks";
import { hideToast } from "@/store/toast/toastSlice";
import { useEffect } from "react";
import { Typography } from "../../typography";
import { TOASTER_ICON } from "./constants";
import { ToasterProps } from "./types";
import useStyles from "./useStyles";

const Toaster = ({ id, type, title, description }: ToasterProps) => {
  const { styles, colors, toasterColors } = useStyles(type);
  const dispatch = useAppDispatch();
  const progressBarIndicator = useSharedValue(0);

  const duration = 4000; // Total duration in milliseconds

  // fill the progress bar, then close the toast when it is full
  useEffect(() => {
    const closeToast = () => dispatch(hideToast(id));

    progressBarIndicator.value = withTiming(
      100,
      { duration, easing: Easing.linear },
      (finished) => {
        if (finished) {
          scheduleOnRN(closeToast);
        }
      },
    );
  }, [progressBarIndicator, dispatch, id]);

  const progressBarWidthAnimatedStyles = useAnimatedStyle(() => {
    return {
      width: `${progressBarIndicator.value}%`,
    };
  });

  return (
    <Animated.View
      entering={FadeInUp}
      exiting={FadeOutUp}
      layout={LinearTransition}
    >
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={styles.iconContainer}>
            <Icon
              name={TOASTER_ICON[type]}
              size="sm"
              color={toasterColors.icon}
            />
          </View>
          <View style={styles.messageContainer}>
            <Typography variant="normalBold" color={colors.foreground.primary}>
              {title}
            </Typography>
            <Typography
              variant="smallRegular"
              color={colors.foreground.secondary}
              numberOfLines={2}
            >
              {description}
            </Typography>
          </View>
        </View>

        <Animated.View
          style={[styles.progress, progressBarWidthAnimatedStyles]}
        />
      </View>
    </Animated.View>
  );
};

export default Toaster;
