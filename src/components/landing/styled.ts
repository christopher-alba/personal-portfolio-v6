import styled from "styled-components";
import { ReactComponent as TulipSVG } from "../../svg/icons/tulip.svg";
import { ReactComponent as ArrowDownSVG } from "../../svg/icons/arrow-down-circle.svg";

export const WrapperDiv = styled("div")`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledTulipSVG = styled(TulipSVG)`
  height: 100px;
  width: 100px;
  @media (max-width: 500px) {
    height: 50px;
    width: 50px;
  }
`;

export const InvisibleButton = styled("button")`
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 100px;
  cursor: pointer;
`;

export const StyledArrowDownSVG = styled(ArrowDownSVG)`
  color: ${({ theme }) => theme.colors.tertiary1};
  height: 60px;
  width: 60px;
  ${InvisibleButton}:hover & {
    color: ${({ theme }) => theme.colors.tertiary1 + "C9"};
  }
  @media (max-width: 500px) {
    height: 40px;
    width: 40px;
  }
`;

export const NameTitle = styled("h1")`
  font-size: 5rem;
  text-align: center;
  margin-top: 0;
  margin-bottom: 0;
  @media (max-width: 1000px) {
    font-size: 2.5rem;
  }
  padding: 0 20px;
`;

export const SubTitle = styled("h2")`
  font-size: 1.5;
  color: ${({ theme }) => theme.colors.secondary2};
  text-align: center;
  @media (max-width: 1000px) {
    font-size: 0.75;
  }
  padding: 0 20px;
  margin-top: 10px;
  margin-bottom: 0;
`;
