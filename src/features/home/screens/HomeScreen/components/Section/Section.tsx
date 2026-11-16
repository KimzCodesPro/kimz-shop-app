import { Gutter, SectionTitle } from "@/components/ui/layout";
import { View } from "react-native";
import SectionScroll from "./SectionScroll/SectionScroll";
import styles from "./sectionStyles";
import { SectionProps } from "./types";

const Section = <T,>({
  title,
  actionText,
  onActionPress,
  data,
  renderItem,
  itemHorizontalSpace,
}: SectionProps<T>) => {
  return (
    <View style={styles.container}>
      <Gutter>
        <SectionTitle
          title={title}
          actionText={actionText}
          onActionPress={onActionPress}
        />
      </Gutter>
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
