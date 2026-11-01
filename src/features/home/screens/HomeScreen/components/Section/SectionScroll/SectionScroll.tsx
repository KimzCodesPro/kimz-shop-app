import { Fragment } from "react";
import { ScrollView } from "react-native";
import { SectionScrollProps } from "./types";
import useStyles from "./useStyles";

const SectionScroll = <T,>({
  data,
  renderItem,
  style,
  itemHorizontalSpace,
}: SectionScrollProps<T>) => {
  const styles = useStyles(itemHorizontalSpace);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={[styles.content, style]}
    >
      {data.map((item, index) => (
        <Fragment key={index}>{renderItem(item)}</Fragment>
      ))}
    </ScrollView>
  );
};

export default SectionScroll;
