import { FC } from "react";
import { SwordsVerticalSVG } from "./styled";

const SwordsVertical: FC<{ color1: string; color2: string }> = ({
	color1,
	color2,
}) => {
	return (
		<SwordsVerticalSVG
			width="72"
			height="592"
			viewBox="0 0 72 592"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M17 12.9898L33 0V564H17V12.9898Z" fill={color2} />
			<path d="M39 26H52V577.105L39 592V26Z" fill={color1} />
			<rect y="470" width="39" height="11" fill={color2} />
			<rect x="33" y="103" width="39" height="11" fill={color1} />
		</SwordsVerticalSVG>
	);
};

export default SwordsVertical;