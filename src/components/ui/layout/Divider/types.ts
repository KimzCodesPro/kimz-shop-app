import { DIVIDER_SPACE } from "./constants";

export type DividerSpace = keyof typeof DIVIDER_SPACE;

export type DividerProps = {
  space?: DividerSpace;
};
