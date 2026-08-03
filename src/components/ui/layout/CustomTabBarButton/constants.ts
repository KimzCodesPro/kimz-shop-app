import { spacing } from "@/constants";
import { scalingMethods } from "@/utils";
const { VS } = scalingMethods;

export const MAX_BADGE_COUNT = 9;

export const TAB_ICON_SIZE = VS(25);

export const TAB_PADDING_VERTICAL = VS(12);

export const TAB_GAP = spacing.space8.height;

// Must match the lineHeight of the label's Typography variant (xsmallBold).
const TAB_LABEL_LINE_HEIGHT = VS(14);

/**
 * Height of CustomTabBarButton's content box, so the tab bar can size itself
 * to the button instead of both carrying a number that has to be kept in sync.
 *
 * Each part is scaled on its own, so this sums the already-scaled values
 * rather than scaling the total — that is what the rendered box measures.
 */
export const TAB_BAR_CONTENT_HEIGHT =
  TAB_PADDING_VERTICAL * 2 + TAB_ICON_SIZE + TAB_GAP + TAB_LABEL_LINE_HEIGHT;
