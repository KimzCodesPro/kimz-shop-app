import Icon, { IconName } from "@/components/icons";
import { View } from "react-native";
import Typography from "../../display/Typography/Typography";
import RowNavTrailing from "./RowNavTrailing";
import useStyles from "./useStyles";

type RowNavBaseProps = {
  variant: "default" | "danger";
  title: string;
  icon: IconName;
};

type RowNavProps = RowNavBaseProps &
  (
    | { trailing: "chevronWithValue"; trailingValue: string }
    | { trailing: "chevron" | "noChevron"; trailingValue?: never }
  );

const RowNav = ({ title, variant, icon, ...trailingProps }: RowNavProps) => {
  const { styles, colors } = useStyles();

  const conditionalColor = {
    default: colors.foreground.primary,
    danger: colors.danger.base,
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainInfo}>
        <Icon name={icon} size={24} color={conditionalColor[variant]} />
        <Typography variant="smallBold" color={conditionalColor[variant]}>
          {title}
        </Typography>
      </View>
      <RowNavTrailing {...trailingProps} />
    </View>
  );
};

export default RowNav;
