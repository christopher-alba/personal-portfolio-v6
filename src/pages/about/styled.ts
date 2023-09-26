import styled, { css } from "styled-components";
import { ReactComponent as Grad } from "../../svg/icons/gradIcon.svg";
import { ReactComponent as Laptop } from "../../svg/icons/laptop.svg";
import { ReactComponent as Money } from "../../svg/icons/moneyIcon.svg";
import { ReactComponent as Practical } from "../../svg/icons/practicalIcon.svg";

import SwordsHorizontal from "../../components/graphics/swords/SwordsHorizontal";
import { Container } from "../../components/container";

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
  @media (min-width: 1000px) {
    display: none;
  }
`;

export const ContainerStyled = styled(Container)`
  width: 60%;
  @media (max-width: 1000px) {
    width: 90%;
  }
`;

export const WrapperDiv4 = styled("div")``;
export const TechInfo = styled("div")`
  display: flex;
  justify-content: space-between;
`;
export const StyledP = styled("p")`
  width: 52%;
  margin-top: 0;
`;
const iconStyles = css`
  width: 18.4px;
  height: 18.4px;
  margin-right: 20px;
`;
export const GradIcon = styled(Grad)`
  ${iconStyles}
`;
export const MoneyIcon = styled(Money)`
  ${iconStyles}
`;
export const PracticalIcon = styled(Practical)`
  ${iconStyles}
`;

export const WrapperDiv5 = styled("div")`
  display: flex;
  align-items: center;
  margin: 5px 0;
`;

export const TechItemsWrapper = styled("div")`
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
`;
export const TechItemWrapper = styled("div")`
  border-right: 20px solid ${({ theme }) => theme.colors.primary2};
  border-bottom: 20px solid ${({ theme }) => theme.colors.primary2};
  width: 50%;
  box-sizing: border-box;
  display: flex;
`;

export const TechItemLeft = styled("div")`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 100%;
`;
export const TechItemUpperLeft = styled("div")`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const TechItemBarBackdrop = styled("div")`
  height: 20px;
  width: 100%;
  background: ${({ theme }) => theme.colors.secondary1};
`;

export const TechItemBarInner = styled("div")`
  height: 100%;
  background: ${({ theme }) => theme.colors.tertiary1};
`;

export const IconWrapper = styled("div")`
  display: flex;
`;

export const GalleryWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 25%;
`;

export const GalleryImage = styled("img")`
  height: auto;
  width: 100%;
  box-sizing: border-box;
  border-right: 5px solid ${({ theme }) => theme.colors.primary2};
  border-bottom: 5px solid ${({ theme }) => theme.colors.primary2};
`;

export const GalleryColumnsWrapper = styled("div")`
  display: flex;
  margin-top: 100px;
`;
