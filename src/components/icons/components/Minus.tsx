import { HS } from "@/utils";
import Svg, { Path } from "react-native-svg";
import { IconBase } from "../types";

const Minus = ({
  size = 24,
  color = "black",
  style,
  strokeWidth = 1.5,
}: IconBase) => (
  <Svg
    width={HS(size)}
    height={HS(size)}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    style={style}
  >
    <Path d="M5 12l14 0" />
  </Svg>
);
export default Minus;
