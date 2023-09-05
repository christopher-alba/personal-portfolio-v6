import styled from "styled-components";
import { ReactComponent as Grad } from "../../svg/icons/gradIcon.svg";
import { ReactComponent as Laptop } from "../../svg/icons/laptop.svg";
import SwordsHorizontal from "../../components/graphics/swords/SwordsHorizontal";

export const WrapperDiv1 = styled("div")`
	display: flex;
	flex-wrap: nowrap;
	@media (max-width: 1000px) {
		flex-wrap: wrap;
	}
`;

export const WrapperDiv2 = styled("div")`
	text-align: center;
	position: relative;
	padding-top: 40px;
	&:first-of-type {
		padding-right: 100px;
		@media (max-width: 1000px) {
			padding-right: 0;
		}
	}
	&:last-of-type {
		padding-left: 100px;
		@media (max-width: 1000px) {
			padding-left: 0;
		}
	}
`;

export const WrapperDiv3 = styled("div")`
	background: ${({ theme }) => theme.colors.tertiary1 + "C9"};
	padding: 100px 0;
	margin: 200px 0;
	text-align: center;
`;

export const GradSVG = styled(Grad)``;
export const LaptopSVG = styled(Laptop)``;

export const SwordHorizontalSVGStyled = styled(SwordsHorizontal)`
    @media(min-width: 1000px){
        display: none;
    }
`;
