import { FC } from "react";
import { SVGTopLeft } from "./styled";
import { AnimatedComponent, Lookup, SpringValue } from "@react-spring/web";

const TopLeft: FC<{
  color1: string;
  color2: string;
  as: AnimatedComponent<"svg">;
  style: Lookup<SpringValue<any>>;
}> = ({ color1, color2, as, style }) => {
  return (
    <SVGTopLeft
      as={as}
      style={style}
      width="319"
      height="318"
      viewBox="0 0 319 318"
      fill="none"
      xmlns="http://www.w3.org/2000/TopSVGTopLeft"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M74.1754 70.5909H262.434L284.556 48.5042H318.391L278.05 88.78H89.7914V276.734L49.4503 317.009V283.23L74.1754 258.545V70.5909Z"
        fill={color1}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M40.7314 38.197L230.811 38.197L253.071 17.3229L15.3287 17.3232L15.3287 240.272L40.7314 216.45L40.7314 38.197ZM15.3287 240.272L2.24604e-05 254.647L0 1.16802e-05L271.543 -1.18503e-05L253.071 17.3229L287.159 17.3229L246.384 55.52L56.1032 55.5202L56.1032 233.773L15.3287 271.97L15.3287 240.272Z"
        fill={color2}
      />
    </SVGTopLeft>
  );
};

export default TopLeft;
