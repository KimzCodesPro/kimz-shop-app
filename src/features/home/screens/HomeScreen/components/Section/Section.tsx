import { View } from "react-native";
import SectionScroll from "./SectionScroll/SectionScroll";
import styles from "./sectionStyles";
import SectionTitle from "./SectionTitle/SectionTitle";
import { SectionProps } from "./types";

const Section = <T,>({
  title,
  actionText,
  seeAllLink,
  data,
  renderItem,
  itemHorizontalSpace,
}: SectionProps<T>) => {
  return (
    <View style={styles.container}>
      <SectionTitle
        style={styles.title}
        title={title}
        actionText={actionText}
        seeAllLink={seeAllLink}
      />
      <SectionScroll
        style={styles.scrolling}
        data={data}
        renderItem={renderItem}
        itemHorizontalSpace={itemHorizontalSpace}
      />
    </View>
  );
};

export default Section;
