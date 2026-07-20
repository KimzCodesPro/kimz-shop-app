import { StatusType } from "./types";

const inputCurrentStatus = (
  errorMessage: string | undefined,
  isFocused: boolean,
  value: string | undefined,
): StatusType => {
  return errorMessage
    ? "error"
    : isFocused
      ? "focused"
      : value
        ? "filled"
        : "default";
};

export { inputCurrentStatus };
