import { Typography } from "@/components/ui/display";
import { View } from "react-native";
import useStyles from "./useStyles";

type DisplayErrorMessageProps = {
  errorMessage?: string;
};

const DisplayErrorMessage = ({ errorMessage }: DisplayErrorMessageProps) => {
  const { styles, theme } = useStyles();

  if (!errorMessage) return null;

  return (
    <View style={styles.errorMessage}>
      <Typography variant="smallRegular" color={theme.danger.base}>
        {errorMessage}
      </Typography>
    </View>
  );
};

export default DisplayErrorMessage;
