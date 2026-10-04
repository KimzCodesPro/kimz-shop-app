import { Fragment } from "react";
import { ScrollView } from "react-native";
import useStyles from "./sectionScrollStyles";
import { SectionScrollProps } from "./types";

const SectionScroll = <T,>({ data, renderItem }: SectionScrollProps<T>) => {
  const styles = useStyles();

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.content}
    >
      {data.map((item, index) => (
        <Fragment key={index}>{renderItem(item)}</Fragment>
      ))}
    </ScrollView>
  );
};

export default SectionScroll;
