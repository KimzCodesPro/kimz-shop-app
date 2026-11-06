import { HS, VS } from "@/utils";
import Svg, { Path } from "react-native-svg";
import { IconBase } from "../types";

function Loader({ size = 24, color, style, strokeWidth = 1.5 }: IconBase) {
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
      <Path d="M12 3a9 9 0 1 0 9 9" />
    </Svg>
  );
}

export default Loader;
