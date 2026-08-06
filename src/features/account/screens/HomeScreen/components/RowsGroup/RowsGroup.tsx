import { Typography } from "@/src/components/ui/display";
import { useTheme } from "@/src/hooks";
import { scalingMethods } from "@/utils";
import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
const { VS } = scalingMethods;

type RowsGroupProps = {
  title: string;
  children: ReactNode;
};

const RowsGroup = ({ title, children }: RowsGroupProps) => {
  const colors = useTheme();

  return (
    <>
      <Typography
        variant="mediumBold"
        color={colors.foreground.primary}
        style={styles.header}
      >
        {title}
      </Typography>
      <View style={styles.rows}>{children}</View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: VS(24),
    marginBottom: VS(16),
  },
  rows: {
    gap: VS(16),
  },
});

export default RowsGroup;
