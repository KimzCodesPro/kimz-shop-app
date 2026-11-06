import { HS, VS } from "@/utils";
import Svg, { Path } from "react-native-svg";
import { IconBase } from "../types";

function History({ size = 24, color, style, strokeWidth = 1.5 }: IconBase) {
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
      <Path d="M12 8l0 4l2 2" />
      <Path d="M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5" />
    </Svg>
  );
}

export default History;
