import { StyleProp, ViewStyle } from "react-native";

export type TrackingStage =
  "orderPlaced" | "shipped" | "inTransit" | "delivered";

export type TrackingStep = {
  stage: TrackingStage;
  date: string;
  time?: string;
  location?: string;
};

export type TrackingTimelineProps = {
  steps: TrackingStep[];
  activeStage: TrackingStage;
  style?: StyleProp<ViewStyle>;
};
