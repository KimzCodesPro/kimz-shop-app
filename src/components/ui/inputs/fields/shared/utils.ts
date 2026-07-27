import { StatusType } from "./types";

const fieldCurrentStatus = (
  errorMessage: string | undefined,
  isFocused: boolean,
  value: string,
): StatusType => {
  return errorMessage
    ? "error"
    : isFocused
      ? "focused"
      : value
        ? "filled"
        : "default";
};

export { fieldCurrentStatus };
