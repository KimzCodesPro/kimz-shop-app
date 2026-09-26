import Icon from "@/src/components/icons";
import { Typography } from "@/src/components/ui/typography";
import useTranslation from "@/src/hooks/useTranslation";
import { View } from "react-native";
import CurrentPill from "../CurrentPill/CurrentPill";
import { MARK_ICON_SIZE, trackingStageLabel } from "./constants";
import { TrackingTimelineProps } from "./types";
import useStyles from "./useStyles";

const TrackingTimeline = ({
  steps,
  activeStage,
  style,
}: TrackingTimelineProps) => {
  const { styles, colors } = useStyles();
  const { t } = useTranslation();
  const activeStageIndex = steps.findIndex(
    (step) => step.stage === activeStage,
  );
  return (
    <View style={[styles.container, style]}>
      {steps.map((step, index) => {
        const isStagePassed = index <= activeStageIndex;
        const isCurrentStage = activeStage === step.stage;
        const isLastStep = index === steps.length - 1;
        return (
          <View key={index} style={styles.stepContainer}>
            <View style={[styles.stepIndicator]}>
              <View
                style={[
                  styles.stepIndicatorDot,
                  isStagePassed && styles.stepIndicatorDotPassed,
                  isCurrentStage && styles.stepIndicatorDotCurrent,
                  isLastStep && styles.stepIndicatorDotLast,
                ]}
              >
                {!isStagePassed ||
                  (!isCurrentStage && (
                    <Icon
                      color={colors.background.base}
                      name="check"
                      size={MARK_ICON_SIZE}
                    />
                  ))}
                {isCurrentStage && (
                  <View style={styles.stepIndicatorCurrentInnerDot} />
                )}
              </View>
              {!isLastStep && (
                <View
                  style={[
                    styles.stepIndicatorLine,
                    !isCurrentStage
                      ? styles.stepIndicatorLinePassed
                      : styles.stepIndicatorLineDelivered,
                  ]}
                />
              )}
            </View>
            <View style={styles.stepStageInfo}>
              <View style={styles.stepStageTitle}>
                <Typography
                  variant="smallBold"
                  color={
                    isStagePassed
                      ? colors.foreground.primary
                      : colors.foreground.tertiary
                  }
                >
                  {t(trackingStageLabel[step.stage])}
                </Typography>

                {isCurrentStage && <CurrentPill label={t("orders_current")} />}
              </View>

              <Typography
                variant="xsmallRegular"
                color={
                  isCurrentStage
                    ? colors.primary.base
                    : colors.foreground.tertiary
                }
              >
                {step.date}
                {step.time ? ` · ${step.time}` : ""}
                {step.location ? ` · ${step.location}` : ""}
              </Typography>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default TrackingTimeline;
