import { FC } from "react";
import { SVGBottomRight } from "./styled";

const BottomRight: FC<{ color1: string; color2: string }> = ({
  color1,
  color2,
}) => {
  return (
    <SVGBottomRight
      width="319"
      height="318"
      viewBox="0 0 319 318"
      fill="none"
      xmlns="http://www.w3.org/2000/TopSVGBottomRight"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M255.161 244.516L255.161 56.5623L278.031 34.4756L278.031 0.695862L236.327 40.9716L236.327 228.925L41.7047 228.925L-1.21531e-05 269.201L34.9781 269.201L60.5391 244.516L255.161 244.516Z"
        fill={color1}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M288.704 277.906L288.704 88.1333L310.319 65.91L310.319 303.267L79.46 303.267L104.127 277.906L288.704 277.906ZM79.46 303.267L64.5751 318.571L328.256 318.571L328.256 47.4677L310.319 65.91L310.319 31.8771L270.767 72.5856L270.767 262.559L86.1896 262.559L46.6374 303.267L79.46 303.267Z"
        fill={color2}
      />
    </SVGBottomRight>
  );
};

export default BottomRight;
