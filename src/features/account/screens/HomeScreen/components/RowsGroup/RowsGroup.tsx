import { Typography } from "@/components/ui/display";
import { useTheme } from "@/hooks";
import spacing from "@/src/constants/spacing";
import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";

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
    marginTop: spacing.space24.height,
    marginBottom: spacing.space16.height,
  },

  rows: {
    gap: spacing.space16.height,
  },
});

export default RowsGroup;
