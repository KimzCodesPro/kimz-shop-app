import Svg, { Path } from "react-native-svg";
import IconProps from "../type";

function Chevron({ size, color, style }: IconProps) {
  return (
    <Svg
      width={size || 24}
      height={size || 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
    >
      <Path d="M9 6l6 6-6 6" />
    </Svg>
  );
}

export default Chevron;
