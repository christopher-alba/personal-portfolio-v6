import { FC } from "react";
import { SwordsHorizontalSVG } from "./styled";

const SwordsHorizontal: FC<{
	color1: string;
	color2: string;
	className?: string;
}> = ({ color1, color2, className }) => {
	return (
		<SwordsHorizontalSVG
			width="592"
			height="72"
			viewBox="0 0 592 72"
			className={className}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M579.01 17L592 33L28 33L28 17L579.01 17Z" fill={color1} />
			<path d="M566 39L566 52L14.8947 52L0 39L566 39Z" fill={color2} />
			<rect
				x="122"
				width="39"
				height="11"
				transform="rotate(90 122 0)"
				fill={color1}
			/>
			<rect
				x="489"
				y="33"
				width="39"
				height="11"
				transform="rotate(90 489 33)"
				fill={color2}
			/>
		</SwordsHorizontalSVG>
	);
};

export default SwordsHorizontal;
