import { FC } from "react";
import { SVGBottomLeft } from "./styled";
import { AnimatedComponent, Lookup, SpringValue } from "@react-spring/web";

const BottomLeft: FC<{
  color1: string;
  color2: string;
  as: AnimatedComponent<"svg">;
  style: Lookup<SpringValue<any>>;
}> = ({ color1, color2, as, style }) => {
  return (
    <SVGBottomLeft
      as={as}
      style={{...style}}
      width="319"
      height="318"
      viewBox="0 0 319 318"
      fill="none"
      xmlns="http://www.w3.org/2000/TopSVGBottomLeft"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M71.5728 244.516L71.5728 56.5623L49.4502 34.4755L49.4502 0.695862L89.7912 40.9716L89.7913 228.925L278.049 228.925L318.391 269.201L284.556 269.201L259.831 244.516L71.5728 244.516Z"
        fill={color1}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M39.1264 277.906L39.1263 88.1333L18.2186 65.9103L18.2188 303.267L241.529 303.267L217.668 277.906L39.1264 277.906ZM241.529 303.267L255.927 318.571L0.867443 318.571L0.867408 47.4677L18.2186 65.9103L18.2185 31.8771L56.4775 72.5856L56.4777 262.559L235.019 262.559L273.278 303.267L241.529 303.267Z"
        fill={color2}
      />
    </SVGBottomLeft>
  );
};

export default BottomLeft;
