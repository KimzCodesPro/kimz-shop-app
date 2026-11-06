import { HS, VS } from "@/utils";
import Svg, { Path } from "react-native-svg";
import { IconBase } from "../types";

function ChevronDown({ size = 24, color, style, strokeWidth = 1.5 }: IconBase) {
  return (
    <Svg
      width={HS(size)}
      height={VS(size)}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
    >
      <Path d="M6 9l6 6l6 -6" />
    </Svg>
  );
}

export default ChevronDown;
