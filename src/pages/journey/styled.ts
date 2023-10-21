import styled, { css } from "styled-components";
import { Container } from "../../components/container";

const companyWrapperStyles = css`
  padding: 50px 0;
  margin: 50px auto;
  display: flex;
  width: 50%;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;

  @media (max-width: 1000px) {
    width: 80%;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const ContainerStyled = styled(Container)`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

export const CurrentCompanyWrapper = styled("div")`
  ${companyWrapperStyles}
  border: 10px solid ${({ theme }) => theme.colors.tertiary1};
`;

export const CompanyWrapper = styled("div")`
  ${companyWrapperStyles}
  background: ${({ theme }) => theme.colors.primary1};
  border: 10px solid ${({ theme }) => theme.colors.secondary1};
`;

export const TechWrapper = styled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
`;

export const PStyled = styled("p")`
  margin: 0;
`;

export const LearnMoreButtonLink = styled("a")`
  white-space: nowrap;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.secondary1};
  background: ${({ theme }) => theme.colors.primary2};
  border-radius: 5px;
  padding: 10px 20px;
  margin-top: 20px;
  &:hover {
    background: ${({ theme }) => theme.colors.secondary1};
    color: ${({ theme }) => theme.colors.primary1};
  }
`;
