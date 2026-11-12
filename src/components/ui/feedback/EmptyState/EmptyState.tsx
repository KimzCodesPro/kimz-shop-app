import { View } from "react-native";
import Button from "../../inputs/Button/Button";
import Typography from "../../typography/Typography/Typography";
import StatusHalo from "../StatusHalo/StatusHalo";

import { EMPTY_STATE_ICON } from "./constants";
import { EmptyStateProps } from "./types";
import useStyles from "./useStyles";

const EmptyState = ({
  type,
  title,
  description,
  variant = "secondary",
  action,
  style,
}: EmptyStateProps) => {
  const { styles, colors } = useStyles();
  const iconBasedOnType = EMPTY_STATE_ICON[type]

  return (
    <View style={[styles.container, style]}>
      <StatusHalo variant={variant} icon={iconBasedOnType} />
      <View style={styles.textContainer}>
        <Typography
          variant="largeBold"
          textAlign="center"
          color={colors.foreground.primary}
        >
          {title}
        </Typography>

        <Typography
          variant="smallRegular"
          textAlign="center"
          color={colors.foreground.tertiary}
        >
          {description}
        </Typography>

      </View>
      {action?.onPress && action.title && (
        <Button
          variant="primary"
          title={action.title}
          onPress={action.onPress}
          style={styles.action}
        />
      )}
    </View>
  );
};

export default EmptyState;
