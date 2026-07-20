import { spacing } from "@/constants";
import { useTheme } from "@/hooks";
import { StyleSheet } from "react-native";
import { Typography } from "../../../display";
import { FormInputErrorMessageProps } from "./types";

const FormInputErrorMessage = ({
  errorMessage,
}: FormInputErrorMessageProps) => {
  const colors = useTheme();

  if (!errorMessage) return null;
  return (
    <Typography
      variant="xsmallRegular"
      color={colors.danger.base}
      style={styles.errorMessage}
      textTransform="capitalize"
    >
      {errorMessage}
    </Typography>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    marginTop: spacing.space16.height,
  },
});

export default FormInputErrorMessage;
