import Icon, { IconName } from "@/components/icons";
import { useTranslation } from "@/hooks/useTranslation";
import { View } from "react-native";
import Typography from "../../display/Typography/Typography";
import useStyles from "./useStyles";

type RowNavBaseProps = {
  variant: "default" | "danger";
  title: string;
  icon: IconName;
};

type RowNavProps = RowNavBaseProps &
  (
    | { states: "withvalue"; satesValue: string }
    | { states: "novalue" | "noChevron"; satesValue?: never }
  );

const RowNav = ({ title, variant, icon, states, satesValue }: RowNavProps) => {
  const { direction } = useTranslation();
  const { styles, colors } = useStyles();

  const isRTL = direction === "rtl";

  const conditionalColor =
    variant === "danger" ? colors.danger.base : colors.foreground.primary;

  return (
    <View style={styles.container}>
      <View style={styles.mainInfo}>
        <Icon name={icon} size={24} color={conditionalColor} />
        <Typography variant="smallBold" color={conditionalColor}>
          {title}
        </Typography>
      </View>
      {states !== "noChevron" && (
        <View style={styles.states}>
          {states === "withvalue" && (
            <Typography
              variant="smallRegular"
              color={colors.foreground.tertiary}
            >
              {satesValue}
            </Typography>
          )}
          <Icon
            name="chevron"
            size={22}
            color={colors.foreground.tertiary}
            isRTL={isRTL}
          />
        </View>
      )}
    </View>
  );
};

export default RowNav;
