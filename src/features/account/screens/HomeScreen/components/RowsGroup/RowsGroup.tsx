import { Typography } from "@/components/ui/display";
import { useTheme } from "@/hooks";
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
      <View style={styles.header}>
        <Typography variant="mediumBold" color={colors.foreground.primary}>
          {title}
        </Typography>
      </View>
      <View style={styles.rows}>{children}</View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    paddingVertical: VS(4),
    marginTop: VS(24),
    marginBottom: VS(16),
  },

  rows: {
    gap: VS(16),
  },
});

export default RowsGroup;
