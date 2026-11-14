import { View } from "react-native";
import Animated, {
  FadeInUp,
  FadeOutUp,
  LinearTransition,
} from "react-native-reanimated";

import Icon from "@/components/icons";
import { useAppDispatch } from "@/store/hooks";
import { hideToast } from "@/store/toast/toastSlice";
import { useEffect, useState } from "react";
import { Typography } from "../../typography";
import { TOASTER_ICON } from "./constants";
import { ToasterProps } from "./types";
import useStyles from "./useStyles";

const Toaster = ({ id, type, title, description }: ToasterProps) => {
  const { styles, colors, toasterColors } = useStyles(type);
  const dispatch = useAppDispatch();
  const [progressBarIndicator, setProgressBarIndicator] = useState(0);

  const totalWidth = 100;
  const duration = 4000; // Total duration in milliseconds
  const intervalTime = duration / totalWidth; // Interval time in milliseconds

  // progress bar indicator increment
  useEffect(() => {
    const timerId = setInterval(() => {
      setProgressBarIndicator((prevState) => {
        //if pause true stop incrementing progress
        if (prevState < 100) {
          return prevState + 1; //increase 1 pixel
        }
        return prevState;
      });
    }, intervalTime);

    return () => clearInterval(timerId);
  }, [intervalTime]);

  // close toast when progress bar is full
  useEffect(() => {
    if (progressBarIndicator === 100) {
      dispatch(hideToast(id));
    }
  }, [progressBarIndicator, dispatch, id]);

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

        <View
          style={[styles.progress, { width: `${progressBarIndicator}%` }]}
        />
      </View>
    </Animated.View>
  );
};

export default Toaster;
