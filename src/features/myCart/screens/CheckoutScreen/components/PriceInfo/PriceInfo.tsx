import { Divider } from "@/components/ui/layout";
import { Typography } from "@/components/ui/typography";
import { useTranslation } from "@/hooks";
import { View } from "react-native";
import { PriceInfoProps } from "./types";
import useStyles from "./useStyles";

const PriceInfo = ({ subtotal, shipping, tax, total }: PriceInfoProps) => {
  const { t } = useTranslation();
  const { styles, colors } = useStyles();

  return (
    <View style={styles.container}>
      <Divider space="none" />
      {/* subtotal */}
      <View style={styles.row}>
        <Typography variant="normalRegular" color={colors.foreground.tertiary}>
          {t("common_subtotal")}
        </Typography>
        <Typography variant="normalBold" color={colors.foreground.primary}>
          {`$${subtotal.toFixed(2)}`}
        </Typography>
      </View>
      {/* shipping */}
      <View style={styles.row}>
        <Typography variant="normalRegular" color={colors.foreground.tertiary}>
          {t("common_shipping")}
        </Typography>
        <Typography variant="normalBold" color={colors.foreground.primary}>
          {`$${shipping.toFixed(2)}`}
        </Typography>
      </View>
      {/* tax */}
      <View style={styles.row}>
        <Typography variant="normalRegular" color={colors.foreground.tertiary}>
          {t("checkout_tax")}
        </Typography>
        <Typography variant="normalBold" color={colors.foreground.primary}>
          {`$${tax.toFixed(2)}`}
        </Typography>
      </View>
      <Divider />
      {/* total */}
      <View style={styles.row}>
        <Typography variant="mediumBold" color={colors.foreground.tertiary}>
          {t("common_total")}
        </Typography>
        <Typography variant="largeBold" color={colors.primary.base}>
          {`$${total.toFixed(2)}`}
        </Typography>
      </View>
    </View>
  );
};

export default PriceInfo;
