import { SectionTitleProps } from "@/components/ui/layout/SectionTitle/types";
import { SectionScrollProps } from "./SectionScroll/types";

export type SectionProps<T> = Omit<SectionTitleProps, "style"> &
  SectionScrollProps<T>;
