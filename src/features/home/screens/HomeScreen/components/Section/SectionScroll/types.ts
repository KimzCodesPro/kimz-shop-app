import React from "react";

export type SectionScrollProps<T> = {
  data: T[];
  renderItem: (item: T) => React.ReactNode;
};
