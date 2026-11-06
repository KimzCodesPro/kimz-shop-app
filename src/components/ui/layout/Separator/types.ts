import { SPACE } from "./constants";

export type SeparatorSpace = keyof typeof SPACE;

export type SeparatorProps = {
  space?: SeparatorSpace;
};
