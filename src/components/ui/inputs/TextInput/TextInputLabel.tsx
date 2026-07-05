import { Typography } from "@/components/ui/display";
import useStyles from "./useStyles";

type TextInputLabelProps = {
  label: string;
};

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
