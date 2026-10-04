import { SectionScrollProps } from "./SectionScroll/types";
import { SectionTitleProps } from "./SectionTitle/types";

export type SectionProps<T> = SectionTitleProps & SectionScrollProps<T>;
