import { FC } from "react";
import { SVGTopRight } from "./styled";
import { AnimatedComponent, Lookup, SpringValue } from "@react-spring/web";

const TopRight: FC<{
  color1: string;
  color2: string;
  as: AnimatedComponent<"svg">;
  style: Lookup<SpringValue<any>>;
}> = ({ color1, color2, as, style }) => {
  return (
    <SVGTopRight
      as={as}
      style={style}
      width="319"
      height="318"
      viewBox="0 0 330 330"
      fill="none"
      xmlns="http://www.w3.org/2000/TopSVGTopRight"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M252.47 70.5909H57.8486L34.9783 48.5042H0.000244141L41.7049 88.78H236.327V276.734L278.031 317.009V283.23L252.47 258.545V70.5909Z"
        fill={color1}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M287.045 38.197L90.5397 38.197L67.5282 17.3229L313.306 17.3232L313.306 240.272L287.045 216.45L287.045 38.197ZM313.306 240.272L329.153 254.647L329.153 1.16802e-05L48.4315 -1.18503e-05L67.5282 17.3229L32.2877 17.3229L74.4405 55.52L271.154 55.5202L271.154 233.773L313.306 271.97L313.306 240.272Z"
        fill={color2}
      />
    </SVGTopRight>
  );
};

export default TopRight;
