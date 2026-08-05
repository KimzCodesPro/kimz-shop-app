import { scalingMethods } from "../utils/";
import spacing from "./spacing";
const { VS } = scalingMethods;

const iconSize = VS(25);
const paddingVertical = VS(12);
const gap = spacing.space8.height;

// Must match the lineHeight of the label's Typography variant (xsmallBold).
const labelLineHeight = VS(14);

const customBottomTab = {
  maxBadgeCount: 9,
  iconSize,
  paddingVertical,
  gap,
  /**
   * Height of the button's content box, so the bar can size itself to the
   * button instead of both carrying a number that has to be kept in sync.
   *
   * Each part is scaled on its own, so this sums the already-scaled values
   * rather than scaling the total — that is what the rendered box measures.
   */
  contentHeight: paddingVertical * 2 + iconSize + gap + labelLineHeight,
};

export default customBottomTab;
