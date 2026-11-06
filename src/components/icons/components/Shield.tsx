import { HS, VS } from "@/utils";
import Svg, { Path } from "react-native-svg";
import { IconBase } from "../types";

function Shield({ size = 24, color, style, strokeWidth = 1.5 }: IconBase) {
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
      <Path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
    </Svg>
  );
}

export default Shield;
