import styled, { css } from "styled-components";

export const CornerArtStyles = css`
  height: 250px;
  width: 250px;
  object-fit: contain;
  @media (max-width: 800px) {
    height: 125px;
    width: 125px;
  }
`;

export const SVGTopLeft = styled("svg")`
  position: absolute;
  top: 50px;
  left: 50px;
  ${CornerArtStyles}
  @media (max-width: 500px) {
    top: 25px;
    left: 25px;
  }
`;

export const SVGTopRight = styled("svg")`
  position: absolute;
  top: 50px;
  right: 50px;
  ${CornerArtStyles}
  @media (max-width: 500px) {
    top: 25px;
    right: 25px;
  }
`;

export const SVGBottomLeft = styled("svg")`
  position: absolute;
  bottom: 50px;
  left: 50px;
  ${CornerArtStyles}
  @media (max-width: 500px) {
    bottom: 25px;
    left: 25px;
  }
`;

export const SVGBottomRight = styled("svg")`
  position: absolute;
  bottom: 50px;
  right: 50px;
  ${CornerArtStyles}
  @media (max-width: 500px) {
    bottom: 25px;
    right: 25px;
  }
`;
