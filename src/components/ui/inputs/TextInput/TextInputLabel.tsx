import { Typography } from "@/components/ui/display";
import { TextInputLabelProps } from "./types";
import useStyles from "./useStyles";

const TextInputLabel = ({ label }: TextInputLabelProps) => {
  const { styles, colors } = useStyles();

  return (
    <Typography
      variant="normalBold"
      color={colors.foreground.primary}
      style={styles.label}
    >
      {label}
    </Typography>
  );
};

export default TextInputLabel;
