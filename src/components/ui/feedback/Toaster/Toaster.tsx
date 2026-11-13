import { View } from "react-native";

import Icon from "@/components/icons";
import { useEffect, useState } from "react";
import { Typography } from "../../typography";
import useStyles from "./useStyles";

const Toaster = () => {
  const { styles, colors } = useStyles();
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

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={styles.iconContainer}>
            <Icon name="check" size="sm" color={colors.success.strong} />
          </View>
          <View style={styles.messageContainer}>
            <Typography variant="normalBold" color={colors.foreground.primary}>
              Success!
            </Typography>
            <Typography
              variant="smallRegular"
              color={colors.foreground.secondary}
              numberOfLines={2}
            >
              Your action was successful.
            </Typography>
          </View>
        </View>

        <View
          style={[styles.progress, { width: `${progressBarIndicator}%` }]}
        />
      </View>
    </View>
  );
};

export default Toaster;
