import { Divider } from "@/components/ui/layout";
import { Typography } from "@/components/ui/typography";
import { useTranslation } from "@/hooks";
import { View } from "react-native";
import { PriceInfoProps } from "./types";
import useStyles from "./useStyles";

const PriceInfo = ({ subtotal, shipping, total }: PriceInfoProps) => {
  const { t } = useTranslation();
  const { styles, colors } = useStyles();

  return (
    <>
      {/* subtotal */}
      <View style={styles.row}>
        <Typography variant="normalBold" color={colors.foreground.secondary}>
          {t("myCart_subtotal")}
        </Typography>
        <Typography variant="normalBold" color={colors.foreground.primary}>
          $ {subtotal.toFixed(2)}
        </Typography>
      </View>
      {/* shipping */}
      <View style={styles.row}>
        <Typography variant="normalBold" color={colors.foreground.secondary}>
          {t("myCart_shipping")}
        </Typography>
        <Typography variant="normalBold" color={colors.foreground.primary}>
          $ {shipping.toFixed(2)}
        </Typography>
      </View>
      <Divider space="sm" />
      {/* total */}
      <View style={styles.row}>
        <Typography variant="normalBold" color={colors.foreground.secondary}>
          {t("myCart_totalAmount")}
        </Typography>
        <Typography variant="normalBold" color={colors.foreground.primary}>
          $ {total.toFixed(2)}
        </Typography>
      </View>
    </>
  );
};

export default PriceInfo;
