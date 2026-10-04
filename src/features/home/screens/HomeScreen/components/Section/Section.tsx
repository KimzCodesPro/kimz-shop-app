import { View } from "react-native";
import SectionScroll from "./SectionScroll/SectionScroll";
import SectionTitle from "./SectionTitle/SectionTitle";
import { SectionProps } from "./types";

const Section = <T,>({
  title,
  actionText,
  seeAllLink,
  style,
  data,
  renderItem,
}: SectionProps<T>) => {
  return (
    <View>
      <SectionTitle
        title={title}
        actionText={actionText}
        seeAllLink={seeAllLink}
        style={style}
      />
      <SectionScroll data={data} renderItem={renderItem} />
    </View>
  );
};

export default Section;
