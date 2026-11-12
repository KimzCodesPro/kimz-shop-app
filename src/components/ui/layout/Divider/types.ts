import { SEPARATOR_SPACE } from "./constants";

export type SeparatorSpace = keyof typeof SEPARATOR_SPACE;

export type SeparatorProps = {
  space?: SeparatorSpace;
};
