import styled from "styled-components";

export const SwordsVerticalSVG = styled("svg")`
	position: absolute;
	right: -20px;
	top: 0;
	width: 40px;
	height: auto;
    @media (max-width: 1000px){
        display: none;
    }
`;

export const SwordsHorizontalSVG = styled("svg")`
	width: 30%;
	margin: 0 auto;
`;
