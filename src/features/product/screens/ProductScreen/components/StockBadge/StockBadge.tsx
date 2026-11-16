import { Typography } from "@/components/ui/typography";
import { useTranslation } from "@/hooks";
import { View } from "react-native";
import { StockBadgeProps } from "./types";
import useStyles from "./useStyles";

const StockBadge = ({ stockStatus, style }: StockBadgeProps) => {
  const { t } = useTranslation();
  const { styles, badgeColors } = useStyles(stockStatus);

  return (
    <View style={[styles.container, style]}>
      <View style={styles.dot} />
      <Typography variant="xsmallBold" color={badgeColors.typography}>
        {t(
          stockStatus === "inStock"
            ? "itemDetails_inStock"
            : "itemDetails_outOfStock",
        )}
      </Typography>
    </View>
  );
};

export default StockBadge;
