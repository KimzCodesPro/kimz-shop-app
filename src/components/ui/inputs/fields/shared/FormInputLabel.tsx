import { spacing } from "@/constants";
import { useTheme } from "@/hooks";
import { StyleSheet } from "react-native";
import { Typography } from "../../../display";
import { FormInputLabelProps } from "./types";

const FormInputLabel = ({ label }: FormInputLabelProps) => {
  const colors = useTheme();

  if (!label) return null;
  return (
    <Typography
      variant="normalBold"
      style={styles.label}
      color={colors.foreground.primary}
    >
      {label}
    </Typography>
  );
};

const styles = StyleSheet.create({
  label: {
    marginBottom: spacing.space8.height,
  },
});

export default FormInputLabel;
