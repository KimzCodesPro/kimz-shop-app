import { radius } from "@/constants";
import { useTheme } from "@/hooks";
import { scalingMethods } from "@/utils";
import { Pressable } from "react-native";
import { PaginationDotProps } from "./types";
const { HS } = scalingMethods;

const DOT_SIZE = HS(8);
const ACTIVE_DOT_PILL_WIDTH = HS(24);
const ACTIVE_DOT_CIRCLE_WIDTH = HS(8);

const PaginationDot = ({
  active,
  onPress,
  paginationDotType,
}: PaginationDotProps) => {
  const colors = useTheme();

  return (
    <Pressable
      onPress={onPress}
      style={{
        height: DOT_SIZE,
        width: active
          ? paginationDotType === "pill"
            ? ACTIVE_DOT_PILL_WIDTH
            : ACTIVE_DOT_CIRCLE_WIDTH
          : DOT_SIZE,
        borderRadius: radius.full,
        backgroundColor: active ? colors.primary.base : colors.border.default,
      }}
    />
  );
};

export default PaginationDot;
