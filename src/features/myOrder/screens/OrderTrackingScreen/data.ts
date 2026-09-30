import { TrackingStep } from "./components/TrackingTimeline/types";

const TRACKING_STEPS: TrackingStep[] = [
  { stage: "orderPlaced", date: "May 15", time: "14:23" },
  {
    stage: "shipped",
    date: "May 16",
    time: "09:12",
    location: "Cairo Warehouse",
  },
  {
    stage: "inTransit",
    date: "May 17",
    time: "08:04",
    location: "Now in Alexandria",
  },
  { stage: "delivered", date: "Estimated May 20" },
];

const ACTIVE_STAGE = "inTransit";

export { ACTIVE_STAGE, TRACKING_STEPS };
