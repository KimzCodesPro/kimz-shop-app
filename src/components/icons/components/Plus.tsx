import { HS } from "@/utils";
import Svg, { Path } from "react-native-svg";
import { IconBase } from "../types";

const Plus = ({ size = 24, color = "black", style }: IconBase) => (
  <Svg
    width={HS(size)}
    height={HS(size)}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    style={style}
  >
    <Path d="M12 5l0 14" />
    <Path d="M5 12l14 0" />
  </Svg>
);
export default Plus;
