import styled, { css } from "styled-components";
import { Container } from "../../components/container";

const companyWrapperStyles = css`
  padding: 50px 50px 0 50px;
  display: flex;
  width: 70%;
  flex-direction: column;
  box-sizing: border-box;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const ContainerStyled = styled(Container)`
  width: 50%;
  position: relative;
  @media (max-width: 1700px) {
    width: 70%;
  }
  @media (max-width: 1100px) {
    width: 90%;
  }
`;

export const CompanyWrapper = styled("div")`
  ${companyWrapperStyles}
  background: ${({ theme }) => theme.colors.primary2};
  position: relative;
  @media (max-width: 500px) {
    text-align: left !important;
  }
`;

export const TechWrapper = styled("div")`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  @media (max-width: 500px) {
    justify-content: flex-start !important;
  }
`;

export const TechPill = styled("div")`
  background: ${({ theme }) => theme.colors.secondary1};
  color: ${({ theme }) => theme.colors.primary1};
  padding: 5px 10px;
  font-size: 0.8rem;
  margin: 2px;
`;
export const H2Styled = styled("h2")`
  margin: 0;
  font-size: 1.2rem;
`;
export const H1Styled = styled("h1")`
  margin: 0;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.tertiary1};
`;

export const PStyled = styled("p")`
  margin: 20px 0 0 0;
`;

export const LearnMoreButtonLink = styled("a")`
  white-space: nowrap;
  text-decoration: none;
  color: white;
  background: ${({ theme }) => theme.colors.tertiary1};
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding: 10px 20px;
  margin-top: 50px;
  width: fit-content;
  &:hover {
    background: ${({ theme }) => theme.colors.secondary1};
    color: ${({ theme }) => theme.colors.primary1};
  }
`;

export const ButtonWrapper = styled("div")`
  display: flex;
  @media (max-width: 500px) {
    justify-content: flex-start !important;
  }
`;

export const Timeline = styled("div")`
  position: absolute;
  right: 24%;
  height: 100%;
  width: 50px;
  background: ${({ theme }) => theme.colors.secondary1};
  z-index: 1;
  @media (max-width: 500px) {
    z-index: -1;
    left: -50px;
    right: none;
  }
`;
